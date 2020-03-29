import React, { useState } from "react";
import PropTypes from "prop-types";

const CommentForm = props => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const handleNameChange = value => {
    setName(value);
  };

  const handleEmailChange = value => {
    setEmail(value);
  };

  const handleCommentChange = value => {
    setComment(value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    props.setComments([
      ...props.comments,
      {
        postId: props.id,
        id: Date.now(),
        name: name,
        email: email,
        body: comment
      }
    ]);

    setName("");
    setEmail("");
    setComment("");
  };

  return (
    <form
      action="#"
      className="uk-comment-form uk-margin-medium-top"
      onSubmit={handleSubmit}
    >
      <fieldset className="uk-fieldset">
        <legend className="uk-legend">Add Comment</legend>
        <div className="uk-margin">
          <input
            className="uk-input"
            type="text"
            placeholder="Name"
            required
            value={name}
            onChange={event => handleNameChange(event.target.value)}
          />
        </div>
        <div className="uk-margin">
          <input
            className="uk-input"
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={event => handleEmailChange(event.target.value)}
          />
        </div>
        <div className="uk-margin">
          <textarea
            className="uk-textarea"
            rows="5"
            placeholder="Comment"
            required
            value={comment}
            onChange={event => handleCommentChange(event.target.value)}
          />
        </div>
        <div className="uk-margin">
          <button className="uk-button uk-button-primary" type="submit">
            Post Comment
          </button>
        </div>
      </fieldset>
    </form>
  );
};

CommentForm.propTypes = {
  id: PropTypes.number,
  comments: PropTypes.arrayOf(
    PropTypes.exact({
      postId: PropTypes.number,
      id: PropTypes.number,
      name: PropTypes.string,
      email: PropTypes.string,
      body: PropTypes.string
    })
  ),
  setComments: PropTypes.func
};

export default CommentForm;
