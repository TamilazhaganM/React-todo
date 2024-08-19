import React from "react";
import Todo from "./components/todo";
import "bootstrap-icons/font/bootstrap-icons.css";
import{BrowserRouter as Router, Routes, Route,} from 'react-router-dom'
import Notesheaders from "./components/Notesheader/Notesheader";



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/Sticky-Notes" element={<Notesheaders />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
