import './App.css';
import IndexPage from './IndexPage';
import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ProjectsPage from "./ProjectsPage"
import AboutMePage from "./AboutMePage.js"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage/>} />
          <Route path="/projects" element={<ProjectsPage/>} />
          <Route path="/about-me" element={<AboutMePage/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;