import NewItemForm from "./NewItemForm";

const NewItem = (props) => {
    const saveItemObjectHandler = (enteredItem) => {
        const itemObject = {
            ...enteredItem,
            id: Math.random().toString()
        }
        
        props.onAddItem(itemObject)
    }


  return (
    <div>
      <NewItemForm onSaveItemObject={saveItemObjectHandler}/>
    </div>
  );
};

export default NewItem;
