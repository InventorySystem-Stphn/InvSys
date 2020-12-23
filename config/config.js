const express = require("express")
const mongoose = require("mongoose");
const app = express();

function mongoConnect() {
    mongoose.connect("mongodb://localhost:27017/inventorysystem", { useNewUrlParser: true });
    mongoose.set('useFindAndModify', false);
    return "connected to db"
}

module.exports = {mongoConnect : mongoConnect};