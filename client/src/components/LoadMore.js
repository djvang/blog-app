import React from "react"
import Button from "./Button"

const LoadMore = () => {
  return (
    <div className="uk-margin">
      <Button
        className="uk-width-1-1 uk-margin-small-bottom"
        color="primary"
        loading
      >
        Load more
      </Button>
    </div>
  )
}

export default LoadMore
