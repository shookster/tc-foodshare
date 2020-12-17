const db = require("../models");

module.exports = {
  create: function (req, res) {
       db.Location.create({ address: req.body.address })
       .then((location) => {
        db.FoodItem.create({
        category: req.body.category,
        item_description: req.body.item_description,
        LocationId: location.id
      });
    })
    .then((dbModel) => res.json(dbModel))
    .catch((err) => res.status(422).json(err));
  },

  getLocation: function(req, res) {
    db.Location.get({ address: res })
    .then((location) => {
     db.FoodItem.get({
     category: req.body.category,
     item_description: req.body.item_description,
     LocationId: location.id
   });
 })
 .then((dbModel) => res.json(dbModel))
 .catch((err) => res.status(422).json(err));
  }
};
