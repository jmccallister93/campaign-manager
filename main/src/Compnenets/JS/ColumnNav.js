import { useId, useState } from "react";
import "../SCSS/WrapperColumnNav.scss";

const ColumnNav = (props) => {
  const id = useId();
  const [input, setInput] = useState(""); 

  const newItemHandler = (event) =>{
    setInput(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const newItem ={'Name': input}
    setInput("");
    console.log({input})
    
  };

  return (
    <div className="wrapper__columnnav"></div>
  )
    // <div className="wrapper__columnnav">
    //   <form onSubmit={submitHandler}>
    //     <label>
    //       Add Item:
    //       <input
    //         id={id}
    //         value={input}
    //         type="text"
    //         onChange={newItemHandler}
    //       />
    //     </label>
    //     <button type="submit">
    //       +
    //     </button>
    //     <span>{ input }</span>
    //   </form>
    // </div>

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
