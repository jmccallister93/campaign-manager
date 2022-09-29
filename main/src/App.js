import Content from "./Compnenets/JS/Content";
import NewItem from "./Compnenets/JS/NewItem";

function App() {
  const itemList = []

  const addItemHandler = (item) => {
    console.log(item)
  }

  return (
    <>
      <NewItem onAddItem={addItemHandler}/>
      <Content />
    </>
  );
}

export default App;
