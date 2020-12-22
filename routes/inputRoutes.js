const router = require("express").Router();
const foodItemController = require("../controllers/foodItemController");
const inputController = require("../controllers/inputController")

router.route("/input")
  .get(inputController.findAll)
  .post(inputController.create);

  module.exports = router