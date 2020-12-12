const router = require("express").Router();
const foodItemController = require("../../controllers/foodItemRoutes");

// Matches with "/api/foodItem"
router.route("/")
  .get(foodItemController.findAll)
  .post(foodItemController.create);

// Matches with "/api/foodItem/:id"
router.route("/:id")
  .get(foodItemController.findById)
  .put(foodItemController.update)
  .delete(foodItemController.remove);

module.exports = router;