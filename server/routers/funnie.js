const { Router } = require("express");
const Funnie = require("../Models/Funnie");
const router = Router();

// Create record in MongoDB Atlas using Mongoose.js ORM
router.post("/", (request, response) => {
  const newFunnie = new Funnie(request.body);
  newFunnie.save((error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

router.get("/", (request, response) => {
  if (request.query.random) {
    Funnie.aggregate([
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
    Funnie.find({}, (error, record) => {
      if (error) return response.status(500).json(error);
      return response.json(record);
    });
  }
});
router.get("/:id", (request, response) => {
  Funnie.findById(request.params.id, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});
router.delete("/:id", (request, response) => {
  Funnie.findByIdAndRemove(request.params.id, {}, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});
router.put("/:id", (request, response) => {
  const body = request.body;
  Funnie.findByIdAndUpdate(
    request.params.id,
    {
      $set: {
        setup: body.setup,
        punchline: body.punchline
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
