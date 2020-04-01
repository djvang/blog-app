import React, { useContext } from "react";
import { FavoritesContext } from "../../shared/context";

import { Link } from "react-router-dom";

const PostSingleGrid = props => {
  const { isActiveFavorite } = useContext(FavoritesContext);
  const active = isActiveFavorite(props.post.id);

  return (
    <div>
      <div className="uk-card uk-card-default uk-margin-medium-bottom">
        <div className="uk-card-header">
          <h3 className="uk-card-title uk-margin-remove-bottom uk-flex uk-flex-middle uk-flex-between">
            {props.post.title}{" "}
            <a
              href="/"
              className={active ? "uk-icon-link active" : "uk-icon-link"}
              uk-icon="heart"
              onClick={e => {
                props.handleHeartClick(e, props.post, active);
              }}
            >
              {null}
            </a>
          </h3>
        </div>
        <div className="uk-card-body">
          <p>{props.post.body}</p>
        </div>
        <div className="uk-card-footer">
          <Link
            to={`/posts/${props.post.id}`}
            className="uk-button uk-button-text"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostSingleGrid;
