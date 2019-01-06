import React, { Component } from 'react';
import API from '../Utils/API';
import Articles from "../components/Articles";
import Search from "../components/Search"
import Saved from "../components/Saved"
import SavedHeader from "../components/savedHeader"

class Home extends Component {
  state = {
    search: "",
    articles: [],
    start: "",
    end: "",
    savedArticles: []
  }

  componentDidMount() {
    this.getSavedArticles();
  }

  getSavedArticles = () => {
    API.getArticles()
      .then(res =>
        this.setState({ savedArticles: res.data })
      )
      .catch(err => console.log(err));
  };



  getSavedArticles = () => {
    API.getArticles()
      .then(res => this.setState({ savedArticles: res.data })
      ).catch((err) => {
        console.log(err);
      });
  };

  deleteArticle = (id) => {
    API.deleteArticle(id)
      .then(res =>
        this.getSavedArticles())
      .catch((err) => {
        console.log(err);
      });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSaveButton = (id) => {
    const findArticleByID = this.state.articles.find((el) => el._id === id);
    console.log("findArticleByID:", findArticleByID);
    const newSave = { title: findArticleByID.headline.main, date: findArticleByID.pub_date, url: findArticleByID.web_url };
    API.saveArticle(newSave)
      .then(res => this.getSavedArticles())
      .catch(err => console.log(err));
  };

  handleStartYear = (event) => {
    this.setState({ start: event.target.value });
  }

  handleEndYear = (event) => {
    this.setState({ end: event.target.value });
  }

  handleTopicChange = (event) => {
    this.setState({ search: event.target.value });
  }

  handleDeleteButton = (id) => {
    API.deleteArticle(id)
      .then(this.getSavedArticles());
  }

  handleSearch = (event) => {
    event.preventDefault();
    API.searchArticles(this.state.search, this.state.start, this.state.end)
      .then((articles) => {
        console.log(articles.data.response.docs);
        this.setState({
          articles: articles.data.response.docs
        });
      })
  }

  renderArticles = () => {
    return this.state.articles.map(article => (
      <Articles
        _id={article._id}
        key={article._id}
        title={article.headline.main}
        date={article.pub_date}
        snippet={article.snippet}
        url={article.web_url}
        handleSaveButton={this.handleSaveButton}
        getSavedArticles={this.getSavedArticles}
      />
    ));
  }

  renderSaved = () => {
    return this.state.savedArticles.map(save => (
      <Saved
        _id={save._id}
        key={save._id}
        title={save.title}
        date={save.date}
        url={save.url}
        handleDeleteButton={this.handleDeleteButton}
        getSavedArticles={this.getSavedArticles}
      />
    ))
  }

  render() {
    return (
      <div className="container bg-white">
        <br></br>

        <h1 className="text-info text-center">New York Times Article Search</h1>
        <br></br>
        <Search
          handleTopicChange={this.handleTopicChange}
          handleStartYear={this.handleStartYear}
          handleEndYear={this.handleEndYear}
          handleSearch={this.handleSearch}
          renderArticles={this.renderArticles}
          handleSaveButton={this.handleSaveButton}
          getSavedArticles={this.getSavedArticles}
        />
        {/* <SavedHeader />
        <div>
          {this.renderSaved()}
        </div> */}
      </div>
    );
  }
}

export default Home;