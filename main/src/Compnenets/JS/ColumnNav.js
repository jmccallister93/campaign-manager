import { useId, useState } from "react";
import "../SCSS/WrapperColumnNav.scss";
import ColumnNavItems from "./ColumnNavItems";

const ColumnNav = (props) => {
  console.log(props.items);

  return (
    <div className="wrapper__columnnav">
      {props.items.map((item) => (
        <ColumnNavItems items={item.title} />
      ))}
    </div>
  );
};

export default ColumnNav;
{
  /* <ColumnNavItems items={props.items[0].title}/> */
}
