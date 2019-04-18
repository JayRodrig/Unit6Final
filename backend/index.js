const {getApp,} = require('./app');

getApp().listen(11234, () => {
    console.log(`App is listening on port #11235`);
});

