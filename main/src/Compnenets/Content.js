import ColumnDetails from "./ColumnDetails";
import ColumnLinked from "./ColumnLinked";
import ColumnNav from "./ColumnNav";
import Tabs from "./Tabs";
import WrapperContent from "./WrapperContent";
import WrapperTabs from "./WrapperTabs";

const Content = (props) => {
  return (
    <>
      <WrapperTabs>
        <Tabs />
      </WrapperTabs>
      <WrapperContent>
        <ColumnNav />
        <ColumnLinked />
        <ColumnDetails />
      </WrapperContent>
    </>
  );
};

export default Content;
