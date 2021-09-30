import React from "react";

const NewsItem = (props) => {
  let { title, description, imgUrl, newsUrl } = props;
  return (
    <div className="card my-3">
      <img
        src={
          !imgUrl
            ? "https://cdn.kalingatv.com/wp-content/uploads/2021/09/online.jpg"
            : imgUrl
        }
        className="card-img-top"
        alt=""
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a
          href={newsUrl}
          rel="noreferrer"
          target="_blank"
          className="btn btn-sm btn-primary"
        >
          Read More
        </a>
      </div>
    </div>
  );
};
export default NewsItem;
