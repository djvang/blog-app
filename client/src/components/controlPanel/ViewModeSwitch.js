import React, { useContext } from "react";
import { GridContext } from "../../shared/context";

const ViewModeSwitch = () => {
  const { gridMode, setGridMode } = useContext(GridContext);

  const switchMode = value => {
    setGridMode(value);
  };

  return (
    <div className="uk-button-group uk-margin-left">
      <button
        className={
          gridMode
            ? "uk-button uk-button-default uk-active"
            : "uk-button uk-button-default"
        }
        onClick={() => switchMode(true)}
      >
        <span uk-icon="icon:  grid" />
      </button>
      <button
        className={
          !gridMode
            ? "uk-button uk-button-default uk-active"
            : "uk-button uk-button-default"
        }
        onClick={() => switchMode(false)}
      >
        <span uk-icon="icon:  list" />
      </button>
    </div>
  );
};

export default ViewModeSwitch;
