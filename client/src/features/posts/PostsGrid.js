import React from "react"
import PostGrid from "./PostGrid"

const PostsGrid = ({ posts }) => {
  return (
    <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
      {posts.map((post) => (
        <div key={post.id}>
          <PostGrid post={post} />
        </div>
      ))}
    </div>
  )
}

export default PostsGrid
