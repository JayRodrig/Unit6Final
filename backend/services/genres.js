// LOCAL MODULES
const {getDbConn,} = require('./db');
const {dbAddr,} = require('./config');

// DB SERVICE FUNCTIONS
const getGenres = () => getDbConn(dbAddr).any(
    `select * from genres`
);

module.exports = {
    getGenres,
}