const mongoose = require("mongoose");

const connectDB = url => {
    mongoose.set("strictQuery", true);

    mongoose.connect(url)
        .then(url, () => console.log("connected to mongoDB"))
        .catch(err => console.log(err));
}

module.exports = connectDB;

