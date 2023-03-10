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
  Affirmation.find({}, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});
module.exports = router;
