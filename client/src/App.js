import React from "react";
import "./App.css";

import Posts from "./components/Posts/Posts";
import AddPost from "./components/AddAPost/AddPost";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Home from "./components/Home";

import NavBar from "./components/Navbar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Hi</h1>
      {/* <AboutMe /> */}
      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/addpost' element={<AddPost />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path='/contactme' element={<ContactMe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
