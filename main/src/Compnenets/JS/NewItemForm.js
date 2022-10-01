import { useState } from "react";

const NewItemForm = (props) => {
  const [enteredItem, setEnteredItem] = useState("");

  const itemChangeHandler = (event) => {
    setEnteredItem(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const itemObject = {
      title: enteredItem,
    };

    props.onSaveItemObject(itemObject);
    setEnteredItem("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Add Item:</label>
        <input 
        type="text" 
        value={enteredItem} 
        onChange={itemChangeHandler} 
        />
        <button type="submit">+</button>
      </div>
    </form>
  );
};

export default NewItemForm;
