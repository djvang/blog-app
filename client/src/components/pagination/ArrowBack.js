import React from "react";

const ArrowBack = props => {
  return (
    <li className={props.currentPage > 1 ? "" : "uk-disabled"}>
      <a
        href="/"
        onClick={event => props.navigateOnClick(event, props.currentPage - 1)}
      >
        <span data-uk-pagination-previous />
      </a>
    </li>
  );
};

export default ArrowBack;
