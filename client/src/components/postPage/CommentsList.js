import React from "react";
import CommentSingle from "./CommentSingle";

const CommentsList = props => {
  const commentsList = props.comments.map((comment, index) => (
    <React.Fragment key={comment.id}>
      <CommentSingle
        name={comment.name}
        email={comment.email}
        body={comment.body}
      />
      {index !== props.comments.length - 1 && <hr />}
    </React.Fragment>
  ));

  return (
    <>
      <h3 className="uk-margin-remove-top">Comments:</h3>
      <div className="uk-comments">{commentsList}</div>
    </>
  );
};

export default CommentsList;
