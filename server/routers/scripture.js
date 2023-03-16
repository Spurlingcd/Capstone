const { Router } = require("express");
const Scripture = require("../Models/Scripture");
const router = Router();

// Create record in MongoDB Atlas using Mongoose.js ORM
router.post("/", (request, response) => {
  const newScripture = new Scripture(request.body);
  newScripture.save((error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

router.get("/", (request, response) => {
  if (request.query.random) {
    Scripture.aggregate([
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
    Scripture.find({}, (error, record) => {
      if (error) return response.status(500).json(error);
      return response.json(record);
    });
  }
});
router.get("/:id", (request, response) => {
  Scripture.findById(request.params.id, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});
router.delete("/:id", (request, response) => {
  Scripture.findByIdAndRemove(request.params.id, {}, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});
router.put("/:id", (request, response) => {
  const body = request.body;
  Scripture.findByIdAndUpdate(
    request.params.id,
    {
      $set: {
        reference: body.reference,
        verse: body.verse
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
