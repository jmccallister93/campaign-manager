import { useState } from "react";
import "../SCSS/ColumnNav.scss";

const ColumnNavItems = (props) => {
  const [isActive, setActive] = useState("false");

  const ToggleClass = () => {
    setActive(!isActive);
  };

  const classes = isActive ? "nav__items" : "nav__items--active";

  const item = (
    <div className={classes} onClick={ToggleClass}>
      {props.items}
    </div>
  );

  const itemsList = [item.props.className];

  

  itemsList.forEach((element) => {
    if (element === "nav__items--active") {
      element = "nav__items";
    }
  });

  return <>{item}</>;
};
export default ColumnNavItems;
