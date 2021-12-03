const mongoose = require("mongoose");
let hm = new mongoose.Schema({
post: String, 
postName: String,
postCategory: String,
postDesc: String,
main: { type: String, default: null },
commands: { type: String, default: null },
});

module.exports = mongoose.model("news", hm);