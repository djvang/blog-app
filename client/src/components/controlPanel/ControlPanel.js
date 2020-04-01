import React from "react";
import SearchBar from "./Searchbar";
import ViewControl from "./ViewControl";

const ControlPanel = () => {
  return (
    <div className="uk-margin-medium-bottom uk-flex">
      <SearchBar />
      <ViewControl />
    </div>
  );
};

export default ControlPanel;
