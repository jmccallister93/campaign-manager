import { useState } from "react";
import Content from "./Compnenets/JS/Content";
import NewItem from "./Compnenets/JS/NewItem";

function App() {
  // const itemList = [{ id: "1", title: "Test Item", test: "hi" }];
  const itemList = [{title: '1'}, {title: '4'}, {title: '3'}];
  const [items, setItems] = useState(itemList);

  const addItemHandler = (item) => {
    // console.log(item);
  };

  return (
    <>
      <NewItem onAddItem={addItemHandler} />
      <Content items={items} />
    </>
  );
}

export default App;
