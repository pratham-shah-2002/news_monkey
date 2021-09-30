import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";

const News = (props) => {
  const [articles, setarticles] = useState([]);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(1);
  const pageSize = 30;

  const updateNews = async () => {
    setpage(1);
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=197edc75c90f4bc185df777e2448227f&page=${page}&pageSize=${pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setarticles(parsedData.articles);
    settotalResults(parsedData.totalResults);
  };
  const handlePrevClick = async () => {
    setpage(page - 1);
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
      props.category
    }&apiKey=197edc75c90f4bc185df777e2448227f&page=${
      page - 1
    }&pageSize=${pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setarticles(parsedData.articles);
    settotalResults(parsedData.totalResults);
  };
  const handleNextClick = async () => {
    setpage(page + 1);
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
      props.category
    }&apiKey=197edc75c90f4bc185df777e2448227f&page=${
      page + 1
    }&pageSize=${pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setarticles(parsedData.articles);
    settotalResults(parsedData.totalResults);
  };

  useEffect(() => {
    updateNews();
  }, []);
  return (
    <div className="container my-3">
      <h2 className="text-center">NewsMonkey-Top headings</h2>
      <div className="row">
        {articles.map((val, index) => {
          return (
            <div className="col-md-4" key={index}>
              <NewsItem
                title={val.title}
                description={val.description}
                imgUrl={val.urlToImage}
                newsUrl={val.url}
              />
            </div>
          );
        })}
      </div>
      <div className="container d-flex justify-content-between">
        <button
          type="button"
          className="btn btn-dark"
          onClick={handlePrevClick}
          disabled={page === 1}
        >
          &larr; Previous
        </button>
        <button
          type="button"
          className="btn btn-dark"
          onClick={handleNextClick}
          disabled={Math.ceil(totalResults / pageSize) <= page}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};
News.defaultProps = {
  category: "general",
};
News.propTypes = {
  category: PropTypes.string,
};
export default News;
