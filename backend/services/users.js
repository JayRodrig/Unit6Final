// LOCAL MODULES
const {getDbConn,} = require('./db');
const {dbAddr,} = require('./config');

// DB SERVICE FUNCTIONS
const getUsers = () => getDbConn(dbAddr).any(
    `select * from users`
);

const getUser = id => getDbConn(dbAddr).one(
    `select * from users where users.id = $[id]`, {id,}
);

const postUser = username => getDbConn(dbAddr).oneOrNone(
    `insert into users (username) values ($[username]) returning id`, 
    {username,}
);

module.exports = {
    getUsers,
    getUser,
    postUser,
}