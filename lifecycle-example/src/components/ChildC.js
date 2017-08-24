import React from "react";

import { Button } from "antd";
import { toMinus } from "../actions";

export default props => {

  // console.log('childc', props);

  let { dispatch } = props.childCProps;

  const clickToMinus = params => {
    dispatch(toMinus(params));
  };

  return (
    <div>
      this is ChildC
      <Button onClick={clickToMinus.bind(this, 5)}>
        ChildC
      </Button>
    </div>
  );
};

// functional component
