import React, { Component } from "react";

export class NewsItems extends Component {
  render() {
    let { title, discription, imageUrl, newsUrl } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={imageUrl}
            className="card-img-top "
            style={{ height: "250px" }}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}....</h5>
            <p className="card-text">{discription}...</p>
            <a href={newsUrl} className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;
