const dotenv = require('dotenv');

dotenv.config();


console.log(`::::::::::::::Sever Exposed :::::::::::::: ${process.env.PORT}`.white)


module.exports = {
    PORT : process.env.PORT
    };