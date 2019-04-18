// NPM MODULES
const express = require('express');

// LOCAL MODULES
const ShowServices = require('../services/shows');

// ROUTE FUNCTIONS
const getShows = (request, response) => {
    ShowServices.getShows()
        .then(data => {
            response.status(200).json({
                msg: `Successfully retrieved shows`,
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

const getShowByGenre = (request, response) => {
    const {genre_id,} = request.params;
    ShowServices.getShowByGenre(genre_id)
        .then(data => {
            response.status(200).json({
                msg: `Successfully retrieved shows of selected genre.`,
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

const getShowByUser = (request, response) => {
    const {user_id,} = request.params;
    ShowServices.getShowByUser(user_id)
        .then(data => {
            response.status(200).json({
                msg: `Successfully retrieved shows of selected user.`,
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

const getShow = (request, response) => {
    const {id,} = request.params;
    ShowServices.getShow(id)
        .then(data => {
            response.status(200).json({
                msg: `Successfully retrieved show.`,
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

const postShow = (request, response) => {
    const {title, img_url, user_id, genre_id,} = request.body;
    ShowServices.postShow(title, img_url, user_id, genre_id)
        .then(data => {
            response.status(200).json({
                msg: `Successfully posted show.`,
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
const ShowRouter = () => {
    const router = express.Router();

    router.get('/', getShows);
    router.get('/genre/:genre_id', getShowByGenre);
    router.get('/user/:user_id', getShowByUser);
    router.get('/:id', getShow);
    router.post('/', postShow);

    return router;
}

module.exports = {
    ShowRouter,
}