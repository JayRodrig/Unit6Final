// LOCAL MODULES
const {getDbConn,} = require('./db');
const {dbAddr,} = require('./config');

// DB SERVICE FUNCTIONS
const getComments = () => getDbConn(dbAddr).any(
    `select * from comments`
);

const postComment = (comment_body, user_id, show_id) => 
    getDbConn(dbAddr).oneOrNone(
        `insert into comments (comment_body, user_id, show_id) 
        values ($[comment_body], $[user_id], $[show_id]) returning id`, 
        {comment_body, user_id, show_id,}
);

module.exports = {
    getComments,
    postComment,
}