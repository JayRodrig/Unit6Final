// NPM MODULES
const express = require('express');

// LOCAL MODULES
const UserServices = require('../services/users');

// ROUTE FUNCTIONS
const getUsers = (request, response) => {
    UserServices.getUsers()
        .then(data => {
            response.status(200).json({
                msg: `Successfully retrieved users`,
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

const getUser = (request, response) => {
    const {id,} = request.params;
    UserServices.getUser(id)
        .then(data => {
            response.status(200).json({
                msg: `Successfully retrieved users`,
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

const postUser = (request, response) => {
    const {username,} = request.body;
    UserServices.postUser(username)
        .then(data => {
            response.status(200).json({
                msg: `Successfully retrieved users`,
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
const UserRouter = () => {
    const router = express.Router();

    router.get('/', getUsers)
    router.get('/:id', getUser)
    router.post('/', postUser)

    return router;
}

module.exports = {
    UserRouter,
}