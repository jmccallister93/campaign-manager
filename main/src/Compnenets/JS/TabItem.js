import "../SCSS/WrapperTabItem.scss";
import "../SCSS/TabItem.scss";

const TabItem = (props) => {
  const tabTextList = [
    "Main",
    "Quest",
    "Location",
    "NPCs",
    "Monsters",
    "Items",
  ];

  // const onClickClassChange = (event) => {
  //   if (event.target.className === "tabitem__text") {
  //     event.target.className = "tabitem__text--active";
  //   } else {
  //     event.target.className = "tabitem__text";
  //   }
  // };

  const onClickClassCheck = (event) => {
    const div = document.getElementsByClassName("tabitem__div");
    const divClass = div[0];
    const childClass = divClass.childNodes;

    childClass.forEach((tab) => {
      if (
        event.target.className === "tabitem__text" &&
        tab.className === "tabitem__text"
      ) {
        event.target.className = "tabitem__text--active";
      }
      else if(
        tab.className === 'tabitem__text--active' 
      ){
        tab.className = 'tabitem__text'
        event.target.className = 'tabitem__text'
      }
    });
    
  };

  const tabTexts = tabTextList.map((tabText) => (
    <span className="tabitem__text">{tabText}</span>
  ));

  return (
    <div className="wrapper__tabitem">
      <span className="tabitem__div" onClick={onClickClassCheck}>
        {tabTexts}
      </span>
    </div>
  );
};

export default TabItem;
