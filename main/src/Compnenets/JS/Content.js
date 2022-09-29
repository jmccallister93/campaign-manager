import Columns from "./Columns";
import Tabs from "./Tabs";
import "../SCSS/WrapperContent.scss"


const Content = (props) => {
  return (
    <div className="wrapper__content">
      <Tabs />
      <Columns />
    </div>
  );
};

export default Content;
