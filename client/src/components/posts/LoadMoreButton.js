import React, { useState, useContext, useEffect } from "react";
import { PostsContext } from "../../shared/context";
import { useLoadedMore } from "../../hooks/useLoadedMore";
import { useNumberOfPages } from "../../hooks/useNumberOfPages";

const LoadMoreButton = () => {
  const {
    requestParams,
    dispatchRequestParams,
    numberOfPosts,
    loading
  } = useContext(PostsContext);

  const [localLoading, setLocalLoading] = useState(false);

  useEffect(() => {
    if (!loading) {
      setLocalLoading(false);
    }
  }, [loading]);

  const loadedMoreAmount = useLoadedMore(requestParams);
  const numberOfPages = useNumberOfPages(
    numberOfPosts,
    loadedMoreAmount,
    requestParams
  );

  const handleClick = () => {
    setLocalLoading(true);

    const start = (requestParams._page - 1) * requestParams._limit;
    const end =
      requestParams._page * requestParams._limit + loadedMoreAmount + 3;

    dispatchRequestParams({ type: "setSliceRange", value: [start, end] });
  };

  return (
    <div className="uk-margin">
      <button
        className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom"
        onClick={() => handleClick()}
        disabled={requestParams._page === numberOfPages ? true : false}
      >
        Load more
        {localLoading && loading && (
          <div className="uk-margin-small-left" uk-spinner="ratio: 0.6" />
        )}
      </button>
    </div>
  );
};

export default LoadMoreButton;
