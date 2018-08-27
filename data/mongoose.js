const mongoose = require('mongoose');

// mongoose.set('debug', true);
mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost/vue-app', {
  useNewUrlParser: true,
  // keepAlive: true,
  // reconnectTries: Number.MAX_VALUE,
  promiseLibrary: require('bluebird')
})
  .then(() => console.log('Mongoose connection succesful'))
  .catch((err) => console.error(err));

module.exports = mongoose;
