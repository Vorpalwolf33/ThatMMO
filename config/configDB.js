const mongoose = require('mongoose');

const configDB = () => {
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost:27017/browsermmo', {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => console.log("Succesfully connected to database"))
        .catch(err => console.log(err))
}

module.exports = configDB;