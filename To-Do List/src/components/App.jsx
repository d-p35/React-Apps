import React, { useState } from "react";

function App() {
  const [items, setItem] = useState([]);
  const [itemText, setItemText] = useState("");

  console.log(items);

  function handleChange(event) {
    const value = event.target.value;
    setItemText(value);
  }

  function addItem() {
    if (itemText === "") return;
    setItem((prevValue) => [...prevValue, itemText]);
    setItemText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={handleChange}
          name="itemText"
          type="text"
          value={itemText}
        />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => (
            <li key={index}> {item} </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
