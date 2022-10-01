import "../SCSS/WrapperColumnLinked.scss";
import "../SCSS/ColumnLinked.scss"
import { useState } from "react";

const ColumnLinked = (props) => {

  const [itemLinked, setItemLinked] = useState()

  return (
      <div className="wrapper__columnlinked">
        <div className="linkeditem">Linked 1 </div>
        <div className="linkeditem">Linked 2</div>
      </div>
  );
};

export default ColumnLinked;
