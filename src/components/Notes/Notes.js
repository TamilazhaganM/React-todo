import React, { useState } from "react";
import "./Notes.css";
import { faListUl, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const Notes = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [notes,setNotes]=useState([])
  const navigate = useNavigate();
 
  function handletitle(e) {
    const titlevalue = e.target.value;
    setTitle(titlevalue);
    console.log(titlevalue);
  }

  function handlemessage(e) {
    const messagevalue = e.target.value;
    setMessage(messagevalue);
    console.log(messagevalue);
  }
  function handlePlusicon() {
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
    setNotes([...notes,{title,message}])
    setTitle("")
    setMessage("")
    let popupdiplay = document.getElementById("popupp-overlay");
    let popupbox = document.getElementById("popupp-box");  
    popupdiplay.style.display = "none";
    popupbox.style.display = "none";
  }

  function handleCancelbtn(e) {
    e.preventDefault();
    document.getElementById("popupp-overlay").style.display = "none";
    document.getElementById("popupp-box").style.display = "none";
  }

  function handleDeletebtn(index) {
    setNotes(notes.filter((note,i)=>i!==index))
  }

  return (
    <div className="notes-box" id="notes-box">
    {notes.map((note,index)=>(
      <div className="notes-container" key={index}>
        <h1>{note.title}</h1>
        <p>{note.message}</p>
        <button onClick= {()=> handleDeletebtn(index)} className="deletebtn">Delete</button>
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

      <div class="popup-overlay" id="popupp-overlay"></div>
      <div class="popup-box" id="popupp-box">
        <h2>Add notes</h2>
        <form action="">
          <input
            type="text"
            value={title}
            onChange={handletitle}
            placeholder="Notes"
            id="note-title"
          ></input>
          <textarea
            onChange={handlemessage}
            name=""
            value={message}
            id="note-description"
            placeholder="Notes Description"
            cols="30"
            rows="10"
          ></textarea>
          <button onClick={handleAddbtn} id="add">
            Add
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
