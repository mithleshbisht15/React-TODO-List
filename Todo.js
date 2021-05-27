import React, {useState} from "react";
import CancelIcon from '@material-ui/icons/Cancel';
import "./Todo.css";

const Todo = () => {
	const [inputList, setInputList] = useState();
	const [items, setItems] = useState([]);

    const itemEvent = (event) => {
			setInputList (event.target.value);
	};
  
    const listOfItems = () => {
         setItems((oldItems) => {
           return [...oldItems, inputList] 
         });
         setInputList("");
    };


	return(	

      <>
      <div class="sec">
        <div class="container">
            <h1>TODO LIST</h1> 
            <input type="text" placeholder="ADD A ITEMS" value={inputList} onChange={itemEvent}/>
            <button onClick={listOfItems} ><strong>+</strong> </button>

            
              
              {items.map((itemval) => {
              		return <li> <CancelIcon/> { itemval} </li>;
              	})}  

            
        </div>
        </div>
      </>

	);
};


export default Todo;
