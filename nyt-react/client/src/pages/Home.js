import React, { Component } from 'react';
import API from '../Utils/API';
import Articles from "../components/Articles";
// import Main from "../components/Main";
import Search from "../components/Search"
import Saved from "../pages/Saved"

class Home extends Component {
  state = {
    search: "",
    articles: [],
    start: "",
    end: "",
    savedArticles: []
  }

  componentDidMount() {
    // this.getSavedArticles();
  }

  getSavedArticles = () => {
    API.getArticles()
      .then(res => 
        this.setState({savedArticles: res.data})
    )
    .catch(err => console.log(err));
  };

  deleteArticle = (id) => {
    API.deleteArticle(id)
      .then(res => 
      this.getSavedArticles())
    .catch((err) => {
      console.log(err);
    });
  }; 
  
  getSavedArticles = () => {
    API.getArticles()
      .then(res => 
        this.setState({ savedArticles: res.data })
        ).catch((err) => {
          console.log(err);
        });
      }; 
  
  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  }

  // handleSaveButton = (id) => {
  //   console.log("click")
  //   const findArticleByID = this.state.articles.find((el) => el._id === id);
  //   console.log("findArticleByID: ", findArticleByID);
  //   const newSave = {title: findArticleByID.headline.main, date: findArticleByID.pub_date, url: findArticleByID.web_url}
  //   API.saveArticle(newSave)
  //     .then(this.getSavedArticles())
  //     .catch(err => console.log(err));

  // }

  handleSaveButton = (event) => {
    // event.preventDefault();
    console.log("Clicked Again")
    API.saveArticle({
      title: this.state.articles.headline,
      date: this.state.articles.date,
      url: this.state.articles.web_url
    })
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
          <div>
            <h1>Saved</h1>
            {this.renderSaved()}
          </div>
        
               {/* 
          loop over articles with a .map
          take data out of articles array 
          and put it on the screen.
          make a button
          make an api call to datapase and store the article
         */}
      
      </div>
    );
  }
}

export default Home;