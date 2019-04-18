// LOCAL MODULES
const {getApp,} = require('./app');

// FUNCTION TO START EXPRESS SERVER
getApp().listen(11235, () => {
    console.log(`App is listening on port #11235`);
});

