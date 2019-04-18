/*
    TODO: 
    
    **implement testing
    **implement input validation
*/

// NPM MODULES
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// LOCAL MODULES
const {UserRouter,} = require('./routes/users');


// FUNCTION RETURNING EXPRESS APP
const getApp = () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(cors());

    app.use('/user', UserRouter());

    return app;
}

module.exports = {
    getApp,
}