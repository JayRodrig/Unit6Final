// NPM MODULES
const express = require('express');

// LOCAL MODULES
const GenreServices = require('../services/genres');

// ROUTE FUNCTIONS
const getGenres = (request, response) => {
    GenreServices.getGenres()
        .then(data => {
            response.status(200).json({
                msg: `Successfully retrieved genres`,
                data,
            });
        })
        .catch(e => {
            response.status(400).json({
                msg: `Something went wrong.`,
                e,
            });
        });
}

// FUNCTION THAT INITIALIZES AND RETURNS ROUTER
const GenreRouter = () => {
    const router = express.Router();

    router.get('/', getGenres)

    return router;
}

module.exports = {
    GenreRouter,
}