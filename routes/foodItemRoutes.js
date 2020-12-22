const router = require("express").Router();
const foodItemController = require("../controllers/foodItemController");

// Matches with "/api/foodItem"
router.route("/foodItem")
  .get(foodItemController.findAll)
  .post(foodItemController.create);

// Matches with "/api/foodItem/:id"
// router.route("/foodItem/:id")
//   .get(foodItemController.findById)
//   .put(foodItemController.update)
//   .delete(foodItemController.remove);

module.exports = router;