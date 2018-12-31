const router = require("express").Router();
const articleController = require("../../../controllers/article_controller")


router.route("/")
.get(articleController.findAll)
.post(articleController.create);

router.route("/:id")
.get(articleController.findById)
.put(articleController.update)
.delete(articleController.remove);

module.exports = router;

//   getArticles: function() {
//     return axios.get("/api/saved");
//   },

//   saveArticle: function(articleObj) {
//     return axios.post("/api/saved", articleObj);
//   },
  
//   deleteArticle: function(id) {
//     return axios.delete(`/api/saved/${id}`);
//   }
// };

// export default API;


