import React from "react";
import "./Notes.css";
import { faListUl, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const Notes = () => {

  const navigate = useNavigate()

   
   function handlePlusicon(){
    const popupdiplay =document.getElementById("popupp-overlay")
    const popupbox=document.getElementById("popupp-box")
    popupdiplay.style.display="block"
    popupbox.style.display="block"

   }
   function handleListIcon(){
    navigate("/")
   }


  return (
    <div className="notes-box">
      <div className="notes-container">
        <h1>Hello world</h1>
        <p>
          Get set up and learn how to use icons in your projects, awesomely.
          We've got set-up guides for those just getting started, styling guides
          to add some flair, and deeper dives for fine-tuning Font Awesome to
          suit your needs.
        </p>
      </div>
      <FontAwesomeIcon className="plusicon" onClick={handlePlusicon} icon={faPlus} />
      <FontAwesomeIcon className="listicon" onClick={handleListIcon} icon={faListUl} />

      <div class="popup-overlay" id="popupp-overlay"></div>
      <div class="popup-box" id="popupp-box">
        <h2>Add notes</h2>
        <form action="">
          <input type="text" placeholder="Notes" id="note-title"></input>
          <textarea
            name=""
            id="note-description"
            placeholder="Notes Description"
            cols="30"
            rows="10"
          ></textarea>
          <button id="add">Add</button>
          <button id="cancel"> Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default Notes;
