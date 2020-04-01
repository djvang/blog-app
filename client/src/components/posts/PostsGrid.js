import React from "react";

import PostSingleGrid from "./PostSingleGrid";

const PostsGrid = props => {
  const postsList = props.posts.map(post => (
    <PostSingleGrid
      key={post.id}
      post={post}
      handleHeartClick={props.handleHeartClick}
    />
  ));

  return (
    <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
      {postsList}
    </div>
  );
};

export default PostsGrid;
