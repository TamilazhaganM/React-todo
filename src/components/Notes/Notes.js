import React, { useState } from "react";
import "./Notes.css";
import { faListUl, faPenToSquare, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const Notes = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [notes, setNotes] = useState([]);
  const [editIndex, setEditIndex] = useState(null); // New state to track the note being edited
  const navigate = useNavigate();

  function handletitle(e) {
    const titlevalue = e.target.value;
    setTitle(titlevalue);
  }

  function handlemessage(e) {
    const messagevalue = e.target.value;
    setMessage(messagevalue);
  }

  function handlePlusicon() {
    setEditIndex(null); // Reset edit index
    setTitle(""); // Clear title
    setMessage(""); // Clear message
    let popupdiplay = document.getElementById("popupp-overlay");
    let popupbox = document.getElementById("popupp-box");
    popupdiplay.style.display = "block";
    popupbox.style.display = "block";
  }

  function handleListIcon() {
    navigate("/");
  }

  function handleAddbtn(e) {
    e.preventDefault();
    if (title.trim() === "" || message.trim() === "") {
      alert("Please enter both a title and a message.");
      return;
    }
    if (editIndex !== null) {
      // If editing, update the existing note
      const updatedNotes = notes.map((note, index) =>
        index === editIndex ? { title, message } : note
      );
      setNotes(updatedNotes);
      setEditIndex(null); // Reset edit mode
    } else {
      // If not editing, add a new note
      setNotes([...notes, { title, message }]);
    }
    setTitle("");
    setMessage("");
    closePopup();
  }

  function handleCancelbtn(e) {
    e.preventDefault();
    closePopup();
  }

  function handleEditbtn(index) {
    setEditIndex(index); // Set edit mode
    setTitle(notes[index].title); // Pre-fill title
    setMessage(notes[index].message); // Pre-fill message
    let popupdiplay = document.getElementById("popupp-overlay");
    let popupbox = document.getElementById("popupp-box");
    popupdiplay.style.display = "block";
    popupbox.style.display = "block";
  }

  function handleDeletebtn(index) {
    setNotes(notes.filter((note, i) => i !== index));
  }

  function closePopup() {
    let popupdiplay = document.getElementById("popupp-overlay");
    let popupbox = document.getElementById("popupp-box");
    popupdiplay.style.display = "none";
    popupbox.style.display = "none";
  }

  return (
    <div className="notes-box" id="notes-box">
      {notes.map((note, index) => (
        <div className="notes-container" key={index}>
          <h1>{note.title}</h1>
          <p>{note.message}</p>
          <div>
            <FontAwesomeIcon
              className="Editbtn"
              onClick={() => handleEditbtn(index)}
              icon={faPenToSquare}
            />
            <FontAwesomeIcon
              className="deletebtn"
              onClick={() => handleDeletebtn(index)}
              icon={faTrash}
            />
          </div>
        </div>
      ))}
      <FontAwesomeIcon
        className="plusicon"
        onClick={handlePlusicon}
        icon={faPlus}
      />
      <FontAwesomeIcon
        className="listicon"
        onClick={handleListIcon}
        icon={faListUl}
      />

      <div className="popup-overlay" id="popupp-overlay"></div>
      <div className="popup-box" id="popupp-box">
        <h2>{editIndex !== null ? "Edit Note" : "Add Note"}</h2>
        <form action="">
          <input
            type="text"
            value={title}
            onChange={handletitle}
            placeholder="Title"
            id="note-title"
          ></input>
          <textarea
            onChange={handlemessage}
            name=""
            value={message}
            id="note-description"
            placeholder="Keep Your Secrets as a Msg"
            cols="30"
            rows="10"
          ></textarea>
          <button onClick={handleAddbtn} id="add">
            {editIndex !== null ? "Update" : "Add"}
          </button>
          <button onClick={handleCancelbtn} id="cancel">
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default Notes;
