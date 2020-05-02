var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/angular_db', { useNewUrlParser: true })

mongoose.connection.on('connected', function () {
    console.log('Mongoose connect');
}); 

mongoose.connection.on('error', function (err) {
    console.log('Mongoose error');
});

mongoose.connection.on('disconnect', function () {
    console.log('Mongoose dicconnect');
});

process.on('SIGINT', function () {
    mongoose.connection.close(function () {
    console.log('Mongoose close');
    process.exit(0);
    });
});