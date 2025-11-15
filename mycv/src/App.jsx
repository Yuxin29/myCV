import { useState } from 'react'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './App.css'

import Project from './Project';
import Contact from './Contact';
import Gallery from './Gallery';
import Cv from './Cv';

function App() {
  return (
    <div style={{
      maxWidth: "800px",
      margin: "40px auto",
      fontFamily: "Arial, sans-serif",
      lineHeight: "1.6",
      color: "#222",
      padding: "20px"
    }}>

    <div style={{ 
      display: "flex", 
      justifyContent: "space-between", 
      marginBottom: "10px"
    }}>
    {/* Left group */}
    <div style={{ display: "flex", gap: "30px" }}>
      <a href="#project" className="left-bottom-link"> Projects</a>
      <a href="#contact" className="left-bottom-link">Contact</a>
    </div>

    {/* Right item */}
    <a
      href="#gallery"
      style={{
        backgroundColor: "#001c2cff",
        color: "white",
        padding: "8px 14px",
        fontWeight: "bold",
        textDecoration: "none"
      }}
    >
      My hobby
    </a>

    </div>
      {/* 🩵 adding all the sub components */}
      <Cv/>
      <Project/>
      <Contact/>
      <Gallery/>
    </div>
  )
}

export default App
