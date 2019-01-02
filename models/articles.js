
     //Require Mongoose
const mongoose = require("mongoose");

//Create a schema class
const Schema = mongoose.Schema;

//Create article shcema
var ArticleSchema = new Schema ({
    title: {
        type: String,
    },
    url: {
        type: String,
    },
    date: {
        type: Date
        }
});

const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;