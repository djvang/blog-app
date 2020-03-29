import React, { useState, useContext, useEffect } from "react";
import { PostsContext } from "../../shared/context";

const SearchBar = () => {
  const { requestParams, dispatchRequestParams, loading } = useContext(
    PostsContext
  );
  const [localLoading, setLocalLoading] = useState(false);
  useEffect(() => {
    if (!loading) {
      setLocalLoading(false);
    }
  }, [loading]);

  let timeoutValue;

  const setSearchValue = value => {
    dispatchRequestParams({ type: "setSliceRange", value: ["", ""] });
    dispatchRequestParams({ type: "setSearchValue", value: value });
    dispatchRequestParams({ type: "setCurrentPageNumber", value: 1 });
  };

  const handleSearch = value => {
    clearTimeout(timeoutValue);
    timeoutValue = setTimeout(() => {
      setLocalLoading(true);
      setSearchValue(value);
    }, 500); //поиск начинается через 0,5с после последней введенной буквы
  };

  return (
    <form className="uk-search uk-search-default uk-width-medium uk-margin-remove uk-margin-right">
      <span data-uk-search-icon />
      {loading && localLoading && (
        <span
          className="uk-search-icon uk-search-icon-flip"
          uk-spinner="ratio: 0.6"
        />
      )}
      <input
        className="uk-search-input"
        type="search"
        placeholder="Search..."
        onChange={event => handleSearch(event.currentTarget.value)}
        defaultValue={requestParams.q}
      />
    </form>
  );
};

export default SearchBar;
