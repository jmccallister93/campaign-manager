import { useId, useState } from "react";
import "../SCSS/WrapperColumnNav.scss";

const ColumnNav = (props) => {
  const id = useId();
  const [input, setInput] = useState(props?.value ?? "");

  const navItemsList = [];

  const addItem = () => {
    navItemsList.push(input)
  }

  return (
    <div className="wrapper__columnnav">
      <label>
        Add Item:
        <input
          id={id}
          value={input}
          onInput={(e) => setInput(e.target.value)}
        />
      </label>
      <input 
        type="submit" 
        value="+"
        onClick={addItem}
      />
      <ul>
        <li></li>
      </ul>
      
    </div>
  );
};

export default ColumnNav;

// const ColumnNav = (props) => {
//   const navItemsList = [];

//   const navTexts = navItemsList.map((navText) => (
//     <span className="navitem__text">{navText}</span>
//   ));

//   const submitHandler= (e) => {
//     e.preventDefault();
//     console.log('you cliked')
//   }

//   return (
//     <div className="wrapper__columnnav">
//       <form onSubmit={submitHandler}>
//         <label>
//           Add Item:
//           <input type={"text"} />
//         </label>
//         <input type="submit" value="+"/>
//         <span className="tabitem__div">{navTexts}</span>
//       </form>
//     </div>
//   );
// };

// export default ColumnNav;
