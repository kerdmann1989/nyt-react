import axios from "axios"

const API =  {
  searchArticles: function(searchTerm, start, end) {
    const authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
    const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
    authKey + "&q=" + searchTerm + "&begin_date=" + start + "0101&end_date=" + end + "0101";
    return axios.get(queryURL);
  // searchArticles: function (searchTerm, start, end) {
  //   var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
  //   var queryParams = {
  //     "api-key": "b9f91d369ff59547cd47b931d8cbc56b:0:74623931",
  //     q: searchTerm
  //   };

  //   return axios.get(queryURL, { params: queryParams });
  },

  getArticles: function() {
    return axios.get("/api/saved");
  },

  saveArticle: function(articleObj) {
    return axios.post("/api/articles", articleObj);
  },

  deleteArticle: function(id) {
    return axios.delete(`/api/saved/${id}`);
  }
};

export default API;


