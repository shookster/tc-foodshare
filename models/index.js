if (!global.hasOwnProperty("models")) {
    var Sequelize = require("sequelize"),
      sequelize = null;
  if (process.env.HEROKU_POSTGRESQL_BRONZE_URL) {
      // the application is executed on Heroku ... use the postgres         database
  sequelize =new Sequelize(process.env.HEROKU_POSTGRESQL_BRONZE_URL,
   {
     dialect: "postgres",
     protocol: "postgres",
     port: 5432,
     host: "<heroku host>",
     logging: true //false
  });
  } else {
  // the application is executed on the local machine ... use mysql
    sequelize =new Sequelize("postgres://<username>:<password>@<host>:  <port>/<database>",
    {
    dialect: "postgres"
    }
   );
  }
  global.models = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    User: sequelize.import(__dirname + "/user"),
  // add your other models here
    };
  }
  module.exports = global.models;