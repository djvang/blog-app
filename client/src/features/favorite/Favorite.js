import React from "react"
import Icon from "../../components/Icon"

import useFavorites from "./useFavorites"

const Favorite = ({ title, id, type }) => {
  const { addFavorite } = useFavorites()

  return (
    <a
      href="/"
      className="uk-icon-link"
      style={{ flexShrink: 0 }}
      onClick={(event) => {
        event.preventDefault()
        addFavorite({
          title,
          type,
          postId: id,
        })
      }}
    >
      <Icon icon="heart" />
    </a>
  )
}

export default Favorite
