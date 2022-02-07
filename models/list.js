const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listSchema = new Schema({
    name: String,
    tag: String,
    resources: [{type: Schema.Types.ObjectId, ref: "Resource"}]
});

module.exports = mongoose.model("List", listSchema);