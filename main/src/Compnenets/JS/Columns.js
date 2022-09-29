import ColumnDetails from "./ColumnDetails";
import ColumnLinked from "./ColumnLinked";
import ColumnNav from "./ColumnNav";
import WrapperColumns from "./WrapperColumns";

const Columns = (props) => {
  return (
    <WrapperColumns>
      <ColumnNav />
      <ColumnLinked />
      <ColumnDetails />
    </WrapperColumns>
  );
};

export default Columns;
