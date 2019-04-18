// LOCAL MODULES
const {getDbConn,} = require('./db');
const {dbAddr,} = require('./config');

// DB SERVICE FUNCTIONS
const getShows = () => getDbConn(dbAddr).any(
    `select * from shows`
);

const getShowByGenre = genre_id => getDbConn(dbAddr).any(
    `select * from shows where shows.genre_id = $[genre_id]`, 
    {genre_id,}
);

const getShowByUser = user_id => getDbConn(dbAddr).any(
    `select * from shows where shows.user_id = $[user_id]`, 
    {user_id,}
);

const getShow = id => getDbConn(dbAddr).any(
    `select * from shows where shows.id = $[id]`, {id,}
);

const postShow = (title, img_url, user_id, genre_id) => 
    getDbConn(dbAddr).oneOrNone(
        `insert into shows (title, img_url, user_id, genre_id) 
        values ($[title], $[img_url], $[user_id], $[genre_id]) 
        returning id`, 
        {title, img_url, user_id, genre_id}
);

module.exports = {
    getShows, 
    getShowByGenre, 
    getShowByUser, 
    getShow, 
    postShow,
}