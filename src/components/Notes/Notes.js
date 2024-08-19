import React from 'react'
import "./Notes.css";

const Notes = () => {
  return (
    <div >
        <div className='notes-box'>
        <div className='notes-container'>
        <input type='text' className='notetitle' placeholder='Title'></input>
            <textarea className='notemessage' placeholder='Place Your message....' rows={5}></textarea>
                    </div>
        </div>
      
    </div>
  )
}

export default Notes