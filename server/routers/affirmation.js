const { Router } = require("express");
const Affirmation = require("../Models/Affirmation");
const router = Router();

// Create record in MongoDB Atlas using Mongoose.js ORM
router.post("/", (request, response) => {
  const newAffirmation = new Affirmation(request.body);
  newAffirmation.save((error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});
router.get("/", (request, response) => {
  if (request.query.random) {
    Affirmation.aggregate([
      {
        $sample: { size: 1 }
      }
    ])
      .then(record => {
        response.json(record[0]);
      })
      .catch(error => {
        response.status(500).json(error);
      });
  } else {
    Affirmation.find({}, (error, record) => {
      if (error) return response.status(500).json(error);
      return response.json(record);
    });
  }
});
router.get("/:id", (request, response) => {
  Affirmation.findById(request.params.id, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});
router.delete("/:id", (request, response) => {
  Affirmation.findByIdAndRemove(request.params.id, {}, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});
router.put("/:id", (request, response) => {
  const body = request.body;
  Affirmation.findByIdAndUpdate(
    request.params.id,
    {
      $set: {
        quote: body.quote
      }
    },
    {
      new: true,
      upsert: true
    },
    (error, record) => {
      if (error) return response.status(500).json(error);
      return response.json(record);
    }
  );
});

module.exports = router;
