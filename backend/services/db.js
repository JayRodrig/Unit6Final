const pgp = require('pg-promise');

const getDbConn = (() => {
    let dbConn = null;
    return dbAddr => {
        if (!dbConn) {
            pgp({})(dbAddr);
        }
        return dbConn;
    } 
})();

module.exports = {
    getDbConn,
}