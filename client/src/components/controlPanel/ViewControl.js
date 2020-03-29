import React from "react";

import SortFilter from "./SortFilter";
import LimitFilter from "./LimitFilter";
import ViewModeSwitch from "./ViewModeSwitch";

const ViewControl = () => {
  return (
    <>
      <SortFilter />
      <LimitFilter />
      <ViewModeSwitch />
    </>
  );
};

export default ViewControl;
