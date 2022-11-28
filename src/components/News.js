import React, { Component } from "react";
import NewsItems from "./NewsItems";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    category: "general",
  };
  PropTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
  };
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=41dbf8d792cf4b5da5211b023ffd47c8&page=1&pageSize=20`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
    });
  }

  render() {
    return (
      <div className="container  my-3 text-center ">
        <h2 style={{ margin: "35px 0px" }}>NewsWeb - Top Headlines</h2>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItems
                  title={element.title ? element.title.slice(0, 45) : ""}
                  discription={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageUrl={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://media.cnn.com/api/v1/images/stellar/prod/221113151058-ftx-file.jpg?c=16x9&q=w_800,c_fill"
                  }
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button type="button" className="btn btn-dark">
            &larr; Previous
          </button>
          <button type="button" className="btn btn-dark">
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
