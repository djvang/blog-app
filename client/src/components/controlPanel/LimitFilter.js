import React, { useContext } from "react";
import Select from "react-select";
import { limitOptions } from "../../shared/app-constants";
import { PostsContext } from "../../shared/context";

const LimitFilter = () => {
  const { dispatchRequestParams } = useContext(PostsContext);

  const setPostsPerPageValue = value => {
    dispatchRequestParams({ type: "setSliceRange", value: ["", ""] });
    dispatchRequestParams({ type: "setPostsPerPage", value: +value });
    dispatchRequestParams({ type: "setCurrentPageNumber", value: 1 });
  };

  return (
    <Select
      name="limit-options-select"
      className="custom-select"
      defaultValue={limitOptions[0]}
      options={limitOptions}
      onChange={target => setPostsPerPageValue(target.value)}
    />
  );
};

export default LimitFilter;
