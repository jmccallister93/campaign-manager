import "../SCSS/WrapperColumnNav.scss";
import ColumnNavItems from "./ColumnNavItems";
import { Resizable } from "react-resizable";

const ColumnNav = (props) => {
  return (
    <div className="wrapper__columnnav">
      {props.items.map((item) => (
        <ColumnNavItems key={item.id} items={item.title} />
      ))}
    </div>
  );
};

export default ColumnNav;
