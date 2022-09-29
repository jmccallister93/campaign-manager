import "../SCSS/WrapperTabItem.scss";
import "../SCSS/TabItem.scss"

const TabItem = (props) => {
  const text = props.text;

  const tabTextList = [
    "Main",
    "Quest",
    "Location",
    "NPCs",
    "Monsters",
    "Items",
  ];

  const tabTexts = tabTextList.map((tabText) => 
  <span className="tabitem__text">{tabText}</span>
  )

  return(
    <div className="wrapper__tabitem">
      <span className="tabitem__div">{tabTexts}</span>
    </div>
  );
};

export default TabItem;











// const populateTabText = (data) => {
  //   for(let i=0; i<data.length; i++){
  //     return data[i];
  //   };
  // };

  // console.log(populateTabText(tabItemList))