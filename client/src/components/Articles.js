import React from 'react';
import moment from 'moment';

const Articles = (props) =>
    <div className="container text-center">
        <div><h4 className="text-info">{props.title}</h4></div>

        <p className="font-italic text-center">{props.snippet}</p>
        <p className="text-center">Date Published: {moment(props.date).format('M/DD/YYYY')}</p>
        <span>
            <a href={props.url} target="_blank" rel="noopener noreferrer">
                <button className="btn btn-grey mr-1">View Article</button>
            </a>
            <button className="btn btn-info ml-1" onClick={() => props.handleSaveButton(props._id)}>Save Article</button>

        </span>
        <hr></hr>
    </div>

export default Articles;