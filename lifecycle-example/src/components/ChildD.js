import React from "react";

export default props => {

  // console.log('child ------ d', props);

  let { e = 0 } = props.childDProps;

  return (
    <div>
      this is ChildD
      {e}
    </div>
  );
};

// functional component
