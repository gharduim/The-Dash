const mongoose = require('mongoose'); // import mongoose

// create connection to database
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/the-dash',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    });

// export connection
module.exports = mongoose.connection;