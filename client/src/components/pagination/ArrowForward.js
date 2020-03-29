import React from "react";

const ArrowForward = props => {
  return (
    <li
      className={props.currentPage < props.numberOfPages ? "" : "uk-disabled"}
    >
      <a
        href="/"
        onClick={event => props.navigateOnClick(event, props.currentPage + 1)}
      >
        <span data-uk-pagination-next />
      </a>
    </li>
  );
};

export default ArrowForward;
