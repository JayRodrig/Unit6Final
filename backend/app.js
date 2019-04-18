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
const {GenreRouter,} = require('./routes/genres');
const {ShowRouter,} = require('./routes/shows');
const {CommentRouter,} = require('./routes/comments');


// FUNCTION RETURNING EXPRESS APP
const getApp = () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(cors());

    app.use('/user', UserRouter());
    app.use('/genre', GenreRouter());
    app.use('/show', ShowRouter());
    app.use('/comment', CommentRouter());

    return app;
}

module.exports = {
    getApp,
}