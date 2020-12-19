const db = require("../models");

module.exports = {
  create: function (req, res) {
    db.Location.create({
      address: req.body.address,
      lat: req.body.lat,
      lng: req.body.lng,
    })
      .then((location) => {
        db.FoodItem.create({
          category: req.body.category,
          item_description: req.body.item_description,
          LocationId: location.id,
        });
      })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  findAll: function (req, res) {
    db.Location.findAll({ include: [{ all: true, nested: true }] })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  // getLocation: function (req, res) {
  //   db.Location.get(req)
  //     .then((location) => {
  //       console.log(location);
  //       db.FoodItem.get(req.query);
  //     })
  //     .then((dbModel) => res.json(dbModel))
  //     .catch((err) => res.status(422).json(err));
  // },
};
