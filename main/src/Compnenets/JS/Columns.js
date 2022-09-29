import ColumnDetails from "./ColumnDetails";
import ColumnLinked from "./ColumnLinked";
import ColumnNav from "./ColumnNav";
import "../SCSS/WrapperColumns.scss"

const Columns = (props) => {
  return (
    <div className="wrapper__columns">
      <ColumnNav />
      <ColumnLinked />
      <ColumnDetails />
    </div>
  );
};

export default Columns;
