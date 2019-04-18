// NPM MODULES
const express = require('express');

// LOCAL MODULES
const CommentServices = require('../services/comments');

// ROUTE FUNCTIONS
const getComments = (request, response) => {
    const {show_id,} = request.params; 
    CommentServices.getComments(show_id)
        .then(data => {
            response.status(200).json({
                msg: `Successfully retrieved comments.`,
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

const postComment = (request, response) => {
    const {comment_body, user_id, show_id,} = request.body;
    CommentServices.postComment(comment_body, user_id, show_id)
        .then(data => {
            response.status(200).json({
                msg: `Successfully posted comment.`,
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
const CommentRouter = () => {
    const router = express.Router();

    router.get('/:show_id', getComments);
    router.post('/', postComment);

    return router;
}

module.exports = {
    CommentRouter,
}