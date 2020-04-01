import React, { useContext } from "react";
import Select from "react-select";
import { sortOptions } from "../../shared/app-constants";
import { PostsContext } from "../../shared/context";

const SortFilter = () => {
  const { dispatchRequestParams } = useContext(PostsContext);

  const switchSortValue = value => {
    dispatchRequestParams({ type: "setSliceRange", value: ["", ""] });
    dispatchRequestParams({ type: "setSortValue", value: value });
    dispatchRequestParams({ type: "setCurrentPageNumber", value: 1 });
  };

  return (
    <Select
      name="sort-options-select"
      className="custom-select"
      defaultValue={sortOptions[0]}
      options={sortOptions}
      onChange={target => switchSortValue(target.value)}
    />
  );
};

export default SortFilter;
