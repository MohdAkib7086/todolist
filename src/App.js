import React, { useState } from "react";
import ToDolist from "./ToDolist";

const App = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const inputEvent = (event) => {
    // console.log(event.target.value);
    setInput(event.target.value);
  };

  const displayItem = () => {
    setItems((oldItems) => {
      return [...oldItems, input];
    });
    setInput("");
  };
  const deleteItems = (id) => {
    // console.log("i is clicked");
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="control_div">
          <div className="center_div">
            <br />
            <h1>ToDo List</h1>
            <br />
            <input type="text"
              placeholder="Add Items"
              value={input}
              onChange={inputEvent}
            />
            <button onClick={displayItem}>+</button>

            <ol>
              {/* <li>{input}</li> */}
              {items.map((itemvalue, index) => {
                return <ToDolist key={index}
                  id={index}
                  text={itemvalue}
                  onSelect={deleteItems} />
              })}
            </ol>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;