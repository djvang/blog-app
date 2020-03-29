import React from "react";

import PostSingleList from "./PostSingleList";

const PostsList = props => {
  const postsList = props.posts.map(post => (
    <PostSingleList
      key={post.id}
      post={post}
      handleHeartClick={props.handleHeartClick}
    />
  ));

  return (
    <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-2@m">
      {postsList}
    </div>
  );
};

export default PostsList;
