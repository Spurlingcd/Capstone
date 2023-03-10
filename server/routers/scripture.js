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
  Scripture.find({}, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

module.exports = router;
