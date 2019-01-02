import React from "react";
import moment from 'moment';

const Saved = props =>
    <div className="container text-center">
        <div className="card-body">
            <h4 className="text-info">{props.title}</h4>
              <p className="text-center">Date Published: {moment(props.date).format('M/DD/YYYY')}</p>
               <br></br>
            <span >
                <a href={props.url} target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-default mr-1">View Article</button>
                </a>
                <button className="btn btn-info ml-1" onClick={() => props.handleDeleteButton(props._id)}>Delete</button>
            </span>
        </div>
        <hr></hr>
    </div>


export default Saved;
