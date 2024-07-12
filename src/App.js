import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import { Route, Routes } from "react-router-dom";
import Experience from "./routes/Experience";

function App() {
  return (
  <>
  <Routes>
    <Route path="/" element = {<Home/>}/>
    <Route path="/project" element = {<Project/>}/>
    <Route path="/experience" element = {<Experience/>}/>
    <Route path="/about" element = {<About/>}/>
    <Route path="/contact" element = {<Contact/>}/>
  </Routes>
  </>
  )
};

export default App;
