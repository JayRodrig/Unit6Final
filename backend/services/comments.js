// LOCAL MODULES
const {getDbConn,} = require('./db');
const {dbAddr,} = require('./config');

// DB SERVICE FUNCTIONS
const getComments = show_id => getDbConn(dbAddr).any(
    `select * from comments join users on comments.user_id = users.id
    where comments.show_id = $[show_id]`,
    {show_id}
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