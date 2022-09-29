import { useId, useState } from "react";
import "../SCSS/WrapperColumnNav.scss";
import NewItem from "./NewItem";

const ColumnNav = (props) => {

  return (
    <div className="wrapper__columnnav">
      <div>{props.items}</div>
    </div>
  );
};

export default ColumnNav;
