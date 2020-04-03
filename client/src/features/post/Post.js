import React from "react"

import Comments from "../comments/Comments"

const Post = () => {
  return (
    <>
      <h1 className="uk-heading-bullet uk-margin-medium-bottom">
        <span>Post title</span>
        <a className="uk-text-small" href="/">
          Author
        </a>
      </h1>
      <div className="uk-article uk-dropcap uk-margin-large-bottom">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis fuga
          adipisci facere natus quas, corporis assumenda provident perferendis
          commodi odio ea vel saepe, numquam reiciendis tenetur rerum.
          Assumenda, quae, eius! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Facilis fuga adipisci facere natus quas, corporis
          assumenda provident perferendis commodi odio ea vel saepe, numquam
          reiciendis tenetur rerum. Assumenda, quae, eius! Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Facilis fuga adipisci facere natus
          quas, corporis assumenda provident perferendis commodi odio ea vel
          saepe, numquam reiciendis tenetur rerum. Assumenda, quae, eius!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis fuga
          adipisci facere natus quas, corporis assumenda provident perferendis
          commodi odio ea vel saepe, numquam reiciendis tenetur rerum.
          Assumenda, quae, eius!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis fuga
          adipisci facere natus quas, corporis assumenda provident perferendis
          commodi odio ea vel saepe, numquam reiciendis tenetur rerum.
          Assumenda, quae, eius!
        </p>
      </div>
      <hr />
      <Comments />
    </>
  )
}

export default Post
