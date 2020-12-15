const db = require("../models");
const FoodItem = require("../models/FoodItem");

module.exports = {
  create: function (req, res) {
    db.location.create({ address: req.body.address }).then((location) => {
      return db.FoodItem.create({
        category: req.body.category,
        item_description: req.body.description,
      });
    }).then((dbModel) => res.json(dbModel))
    .catch((err) => res.status(422).json(err));
  },
};
