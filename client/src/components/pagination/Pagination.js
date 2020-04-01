import React, { useContext } from "react";
import { PostsContext } from "../../shared/context";
import ArrowBack from "./ArrowBack";
import ArrowForward from "./ArrowForward";
import PaginationLink from "./PaginationLink";
import PaginationDots from "./PaginationDots";
import { useLoadedMore } from "../../hooks/useLoadedMore";
import { useNumberOfPages } from "../../hooks/useNumberOfPages";
import { maxNumberOfPages } from "../../shared/app-constants";

const Pagination = () => {
  const { requestParams, dispatchRequestParams, numberOfPosts } = useContext(
    PostsContext
  );

  const loadedMoreAmount = useLoadedMore(requestParams);
  const numberOfPages = useNumberOfPages(
    numberOfPosts,
    loadedMoreAmount,
    requestParams
  );

  const navigateOnClick = (event, value) => {
    event.preventDefault();
    dispatchRequestParams({ type: "setSliceRange", value: ["", ""] });
    dispatchRequestParams({ type: "setCurrentPageNumber", value: value });
  };

  const pagesBeforeDots = [];
  const limitNumberMin =
    requestParams._page + maxNumberOfPages < numberOfPages
      ? requestParams._page
      : numberOfPages - maxNumberOfPages > 2
      ? numberOfPages - maxNumberOfPages - 1
      : 1;
  const limitNumberMax =
    requestParams._page + maxNumberOfPages < numberOfPages
      ? requestParams._page + maxNumberOfPages
      : numberOfPages - 1 || 1;
  for (let i = limitNumberMin; i <= limitNumberMax; i++) {
    pagesBeforeDots.push(
      <PaginationLink
        key={i}
        navigateOnClick={navigateOnClick}
        pageNumber={i}
        active={requestParams._page === i}
      />
    );
  }

  return (
    <ul className="uk-pagination uk-flex-center uk-flex-middle" data-uk-margin>
      <ArrowBack
        key={0}
        navigateOnClick={navigateOnClick}
        currentPage={requestParams._page}
      />
      {pagesBeforeDots}
      {numberOfPages > 10 && numberOfPages - requestParams._page > 9 && (
        <PaginationDots key={Date.now()} />
      )}
      {numberOfPages > 1 && (
        <PaginationLink //for the last pagination item
          key={numberOfPages}
          navigateOnClick={navigateOnClick}
          pageNumber={numberOfPages}
          active={numberOfPages === requestParams._page}
        />
      )}
      <ArrowForward
        key={numberOfPages + 1}
        navigateOnClick={navigateOnClick}
        currentPage={requestParams._page}
        numberOfPages={numberOfPages}
      />
    </ul>
  );
};

export default Pagination;
