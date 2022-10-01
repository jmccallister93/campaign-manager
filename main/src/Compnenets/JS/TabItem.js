import "../SCSS/WrapperTabItem.scss";
import "../SCSS/TabItem.scss";
import { useState } from "react";
import { toBeValid } from "@testing-library/jest-dom/dist/matchers";

const TabItem = (props) => {
  const tabTextList = [
    "Main",
    "Quest",
    "Location",
    "NPCs",
    "Monsters",
    "Items",
  ];

  const [selectedTab, setSelectedTab] = useState(tabTextList[0]);

  const tabText = tabTextList.map((tabItem) => (
    <span
      className={
        selectedTab === tabItem ? "tabitem__text--active" : "tabitem__text"
      }
      onClick={() => setSelectedTab(tabItem)}
    >
      {tabItem}
    </span>
  ));

  return (
    <div className="wrapper__tabitem">
      <span className="tabitem__div">{tabText}</span>
    </div>
  );
};

export default TabItem;
