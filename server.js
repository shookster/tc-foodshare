const express = require("express");

// const routes = require("./routes");
const foodItemRoutes = require("./routes/foodItemRoutes");
const locationRoutes = require("./routes/locationRoutes");
const userRoutes = require("./routes/userRoutes");
const inputRoutes = require("./routes/inputRoutes");
const db = require('./models')
// import location and user routes here
const PORT = process.env.PORT || 3001;
const app = express();

app.set("port", PORT);

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
 // "scripts": {
  //   "start": "react-scripts start",
  //   "client": "cd client && npm run start",
  //   "seed": "node scripts/seedDB.js",
  //   "install": "cd client && npm install",
  //   "build": "npm run build",
  //   "heroku-postbuild": "npm run build"
  // },

// Start the API server
db.sequelize.sync().then(() => {
  app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});

//test