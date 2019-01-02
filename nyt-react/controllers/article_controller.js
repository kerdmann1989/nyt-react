
// module.exports = {
//     findAll: function(req, res) {
//         console.log("getting saved articles");
//         db.Article.find({})
//         .then(function(doc) {
//             res.json(doc);
//         }).catch(function(err) {
//             res.json(err);
//         });
//     },
//     create: function(req, res) {
//         console.log("Adding article");
//         console.log("req.body", req.body);
//         db.Article.create(req.body)
//             .then(function(doc) {
//                 res.json(doc);
//                 console.log("doc: ", doc);
//         }).catch(function(err) {
//             res.json(err);
//         });
//     },
//     delete: function(req, res) {
//         console.log("deleting");
//         db.Article.remove({
//             _id: req.params.id
//         }).then(function(doc) {
//             res.json(doc);
//             console.log("doc: ", doc);
//         }).catch(function(err) {
//             res.json(err);
//         });
//     }
// };

const db = require("../models");

// Defining methods for the articleControllerf
module.exports = {
  findAll: function(req, res) {
    db.Article
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Article
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Article
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Article
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Article
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
