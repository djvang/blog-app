import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

const CustomNavLink = ({ label, to, activeOnlyWhenExact }) => {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });

  return (
    <li className={match ? "uk-active" : ""}>
      <Link to={to}>{label}</Link>
    </li>
  );
};

export default CustomNavLink;
