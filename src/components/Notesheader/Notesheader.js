import React from 'react'
import './header.css';
import Notes from '../Notes/Notes';

const Notesheaders = () => {
  return (
    <div>
        <div className='notes-header'>
        <h1>Sticky Notes</h1>
        </div>
        <Notes />
    </div>
  )
}

export default Notesheaders