import React, { useState } from "react";

const ColumnNavItems = (props) => {
  console.log(props.items);
//   const [items, setItems] = useState(props.items);

  return <div>{props.items}</div>;
};
export default ColumnNavItems;
