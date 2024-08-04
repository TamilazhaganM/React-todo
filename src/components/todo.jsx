import React, { useState } from "react";

function Todo() {
  const [items, setItems] = useState([{ text: "Go to gym", completed: false }]);
  const [newItem, setNewItem] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  function handleList(e) {
    setNewItem(e.target.value);
  }

  function addItem() {
    if (newItem.trim() !== "") {
      setItems((prevItems) => [
        ...prevItems,
        { text: newItem, completed: false },
      ]);
      setNewItem("");
    }
  }

  function deleteItem(index) {
    const updated = items.filter((_, i) => i !== index);
    setItems(updated);
    if (editIndex === index) {
      setEditIndex(null); // Reset edit mode if the item being edited is deleted
      setEditText("");
    }
  }

  function handleCheck(index) {
    const updatedItems = items.map((item, i) => {
      if (i === index) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setItems(updatedItems);
  }

  function startEditing(index) {
    setEditIndex(index);
    setEditText(items[index].text);
  }

  function handleEditChange(e) {
    setEditText(e.target.value);
  }

  function saveEdit(index) {
    const updatedItems = items.map((item, i) => {
      if (i === index) {
        return { ...item, text: editText };
      }
      return item;
    });
    setItems(updatedItems);
    setEditIndex(null);
    setEditText("");
  }

  return (
    <div>
      <div className="todo-container">
        <h1>Task List</h1>
        <input type="text" onChange={handleList} value={newItem}></input>
        <button className="addbutton" onClick={addItem}>ADD</button>
        <ol>
          {items.map((item, index) => (
            <li key={index} id="listItem">
              <label className="custom-checkbox">
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => handleCheck(index)}
                />
                <span className={`checkmark ${item.completed ? "checked" : ""}`}></span>
              </label>
              {editIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editText}
                    onChange={handleEditChange}
                    className="edit text"
                  />
                  <button onClick={() => saveEdit(index)} className="savebutton">Save</button>
                </>
              ) : (
                <>
                  <span className={`text ${item.completed ? "linetext" : ""}`}>
                    {item.text}
                  </span>
                  <button onClick={() => startEditing(index)} className="editbutton ">Edit</button>
                </>
              )}
              <button onClick={() => deleteItem(index)} className="deletebutton">
                Delete
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Todo;
