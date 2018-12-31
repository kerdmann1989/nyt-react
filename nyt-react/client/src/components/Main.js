import React, { Component } from "react";
import Articles from "./Articles";

class Main extends Component {

    state = {
        topic: "",
        start: "",
        end: "",
        articles: [],
        saved: []
      };

renderArticles = () => {
    return this.state.articles.map(article => (
        <Articles
            _id={article._id}
            key={article._id}
            title={article.headline.main}
            byline={article.byline}
            date={article.pub_date}
            url={article.web_url}
            handleSaveButton={this.handleSaveButton}
            getSavedArticles={this.getSavedArticles}
            />
      ));
    }
};


export default Main;