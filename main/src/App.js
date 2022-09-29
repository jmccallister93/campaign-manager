import { useState } from "react";
import Content from "./Compnenets/JS/Content";
import NewItem from "./Compnenets/JS/NewItem";

function App() {
  // const itemList = [{ id: "1", title: "Test Item" }];
  const itemList = "test"
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
