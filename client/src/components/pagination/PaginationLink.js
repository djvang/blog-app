import React from "react";

const PaginationLink = props => {
  return (
    <li className={props.active ? "uk-active" : ""}>
      {props.active && <span>{props.pageNumber}</span>}
      {!props.active && (
        <a
          page={props.pageNumber}
          href={`page-${props.pageNumber}`}
          onClick={event => props.navigateOnClick(event, props.pageNumber)}
        >
          {props.pageNumber}
        </a>
      )}
    </li>
  );
};

export default PaginationLink;
