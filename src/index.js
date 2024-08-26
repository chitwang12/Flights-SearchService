const express = require('express');
const colors = require('colors');
const { PORT } = require('./config/serverConfig');
const setupAndStartServer = async()=>{
    //create the express Object
    const app = express();
    
    app.listen(PORT,()=>{
        console.log(`App is listening at ${PORT}`.yellow)
    });
}


setupAndStartServer();