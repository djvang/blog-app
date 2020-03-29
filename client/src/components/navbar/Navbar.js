import React from "react";
import Favorites from "./Favorites";
import CustomNavLink from "./CustomNavLink";

const Navbar = () => {
  return (
    <nav className="uk-navbar uk-navbar-container" data-uk-navbar>
      <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
          <CustomNavLink to="/posts" label="Posts" />
          <CustomNavLink to="/albums" label="Albums" />
        </ul>
      </div>
      <div className="uk-navbar-right">
        <Favorites />
      </div>
    </nav>
  );
};

export default Navbar;
