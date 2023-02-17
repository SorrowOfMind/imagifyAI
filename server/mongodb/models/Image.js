const { default: mongoose } = require("mongoose");

const Image = new mongoose.Schema({
    name: {type: String, required: true},
    prompt: {type: String, required: true},
    photo: {type: String, required: true},
});

const ImageSchema = new mongoose.model("Image", Image);

module.exports = ImageSchema;