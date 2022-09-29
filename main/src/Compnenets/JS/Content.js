import ColumnDetails from "./ColumnDetails";
import ColumnLinked from "./ColumnLinked";
import ColumnNav from "./ColumnNav";
import Columns from "./Columns";
import Tabs from "./Tabs";
import WrapperContent from "./WrapperContent";
import WrapperTabs from "./WrapperTabs";

const Content = (props) => {
  return (
    <WrapperContent>
      <Tabs />
      <Columns />
    </WrapperContent>
  );
};

export default Content;
