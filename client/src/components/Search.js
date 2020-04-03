import React from "react"

import Spinner from "./Spinner"

const Search = ({ loading, ...props }) => {
  return (
    <div className="uk-search uk-search-default uk-width-1-1">
      <span data-uk-search-icon />
      <span className="uk-search-icon uk-search-icon-flip">
        <Spinner spinning={loading} ratio={0.6} />
      </span>
      <input
        className="uk-search-input"
        type="search"
        placeholder="Search..."
        {...props}
      />
    </div>
  )
}

export default Search
