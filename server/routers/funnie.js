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
  Funnie.find({}, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

module.exports = router;
