import { useState } from "react";
import Content from "./Compnenets/JS/Content";
import NewItem from "./Compnenets/JS/NewItem";

const DUMMY_ITMES = [{ title: "1" }, { title: "4" }, { title: "24" }];

function App() {
  const [items, setItems] = useState(DUMMY_ITMES);

  const addItemHandler = (item) => {
    setItems((prevItems)=>{
      return [item, ...prevItems]
    });
  };

  return (
    <>
      <NewItem onAddItem={addItemHandler} />
      <Content items={items} />
    </>
  );
}

export default App;
