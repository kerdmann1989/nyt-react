import React from "react";

const Search = props =>
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-header text-white bg-dark grey">
            <h3 className="searched card-title text-center mt-2">
              <strong>
                <i className="fa fa-search" aria-hidden="true"></i> Search
              </strong>
            </h3>
          </div>
          <div className="card-body text-center">
            <form>
              <div className="form-group">
                <label htmlFor="topic"><h4 className="text-info">Topic</h4></label>
                <input onChange={props.handleTopicChange} type="text" className="form-control text-center" id="topic" aria-describedby="emailHelp" />
              </div>
              <div className="form-group">
                <label htmlFor="start-year"><h4 className="text-info">Start Year</h4></label>
                <input onChange={props.handleStartYear} type="text" className="form-control text-center" id="start-year" />
              </div>
              <div className="form-group">
                <label htmlFor="end-year"><h4 className="text-info">End Year</h4></label>
                <input onChange={props.handleEndYear} type="text" className="form-control text-center" id="end-year" />
              </div>
              <button onClick={props.handleSearch} type="submit" className="btn btn-info">Search</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <br/><br/>
<div>
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-header text-center text-white bg-dark grey">
            <h3 className="card-title  mt-2">
              <strong>
                <i className="fa fa-newspaper-o" aria-hidden="true"></i> Search Results
              </strong>
            </h3>
          </div>
          <div className="card-body">
            {props.renderArticles()}
          </div>
        </div>
      </div>
    </div>
    <br/><br/>
  </div>
  </div>
  
export default Search;