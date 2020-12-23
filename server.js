const express = require("express");

// const routes = require("./routes");
const foodItemRoutes = require("./routes/foodItemRoutes");
const locationRoutes = require("./routes/locationRoutes");
const userRoutes = require("./routes/userRoutes");
const inputRoutes = require("./routes/inputRoutes");
const db = require('./models')
// import location and user routes here
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use("/api/", foodItemRoutes);
app.use("/api/", locationRoutes);
app.use("/api/", userRoutes);
app.use("/api/", inputRoutes);

// add remaining routes

// Connect to the Mongo DB ???

// Start the API server
db.sequelize.sync().then(() => {
  app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});

//test