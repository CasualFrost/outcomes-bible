const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listSchema = new Schema({
    name: String,
    tag: String,
    resources: [{type: Schema.Types.ObjectId, ref: "Resource"}],
    user: {type: Schema.Types.ObjectId, ref: "User"}
});

module.exports = mongoose.model("List", listSchema);