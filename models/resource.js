const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resourceSchema = new Schema({
    name: String,
    tag: String,
    url: String,
    description: String,
});

module.exports = mongoose.model("Resource", resourceSchema);