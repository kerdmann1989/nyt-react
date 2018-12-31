const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        console.log("getting saved articles");
        db.Article.find({})
        .then(function(doc) {
            res.json(doc);
        }).catch(function(err) {
            res.json(err);
        });
    },
    create: function(req, res) {
        console.log("Adding article");
        console.log("req.body", req.body);
        db.Article.create(req.body)
            .then(function(doc) {
                res.json(doc);
                console.log("doc: ", doc);
        }).catch(function(err) {
            res.json(err);
        });
    },
    delete: function(req, res) {
        console.log("deleting");
        db.Article.remove({
            _id: req.params.id
        }).then(function(doc) {
            res.json(doc);
            console.log("doc: ", doc);
        }).catch(function(err) {
            res.json(err);
        });
    }
};