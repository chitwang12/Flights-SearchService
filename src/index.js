const express = require("express");
const colors = require("colors");
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig');
const CityRepository = require('./repository/city-repository');

const setupAndStartServer = async () => {
  //create the express Object
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true}));
  

  app.listen(PORT, () => {
    console.log(`App is listening at ${PORT}`.yellow);

  });
};

setupAndStartServer();
