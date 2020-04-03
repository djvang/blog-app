import React from "react"
import PostList from "./PostList"

const PostsList = ({ posts }) => {
  return (
    <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-2@m">
      {posts.map((post) => (
        <div key={post.id}>
          <PostList post={post} />
        </div>
      ))}
    </div>
  )
}

export default PostsList
