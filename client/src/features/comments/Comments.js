import React from "react"

import CommentsList from "./CommentsList"
import CommentForm from "./CommentForm"

const Comments = () => {
  return (
    <div>
      <h3 className="uk-margin-remove-top">Comments:</h3>
      <CommentsList />
      <hr />
      <CommentForm />
    </div>
  )
}

export default Comments
