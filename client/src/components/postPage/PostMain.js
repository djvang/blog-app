import React from "react";

const PostMain = props => {
  return (
    <>
      <h1 className="uk-heading-bullet uk-margin-medium-bottom">
        <span>{props.title}</span>
        <a className="uk-text-small" href={`#${props.author}`}>
          {props.author}
        </a>
      </h1>
      <div className="uk-article uk-dropcap uk-margin-large-bottom">
        <p>{props.body}</p>
      </div>
    </>
  );
};

export default PostMain;
