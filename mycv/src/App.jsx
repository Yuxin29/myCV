import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Project from './Project';
import Contact from './Contact';
import Gallery from './Gallery';

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
      <div style={{ display: "flex", gap: "10px" }}>
        <a
          href="#project"
          style={{
            backgroundColor: "#b5e4ffff",
            color: "blue",
            padding: "8px 14px",
            fontWeight: "bold",
            textDecoration: "none"
          }}
        >
        My project
        </a>

        <a
          href="#contact"
          style={{
            backgroundColor: "#b5e4ffff",
            color: "blue",
            padding: "8px 14px",
            fontWeight: "bold",
            textDecoration: "none"
          }}
        >
        Contact me
        </a>
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


      <h1 style={{ textAlign: "left" }}>Yuxin Wu</h1>
      <p>
        Architect (5+ years) → Junior Software Developer
      </p>
      <p>
        📧 yuxin.1.wu@gmail.com | 📞 +358 466803054 | 📍 Helsinki, Finland
      </p>
      <p>
        <a href="in/yuxin-w-ab719b198" target="_blank" rel="noreferrer">LinkedIn</a> |{" "}
        <a href="https://github.com/Yuxin29" target="_blank" rel="noreferrer">GitHub</a>
      </p>

      <h2>About</h2>
      <p>
        I’m an architect transitioning into software development. Through my studies at Hive Helsinki,
        I’ve built a solid foundation in C, C++, and Python, focusing on algorithms, data structures,
        and problem-solving. My design and project management background trained me to:
      </p>
      <p>-Think systematically</p>
      <p>-Collaborate across multidisciplinary teams</p>
      <p>-Deliver precise, reliable, and efficient technical solutions under tight deadlines</p>
      
      <h2>Tech Stacks</h2>
      <h4>Programming Languages <span>C, C++, Python, Bash, Makefile</span> </h4>
      <h4>Tools <span>Linux, Virtual Machines, Debian, Git</span> </h4>
      <h4>Offices <span>Microsoft, Slack, Discord</span> </h4>
      <h4>Design <span>AutoCAD, 3D modeling, rendering, visualization, Adobe Suite, Laser-cutting, 3D printing</span> </h4>
      <h4>Communications <span>Chinese(native), English(Excellent), Finnish(conversational) </span> </h4>
      
      <h2>Work Experience</h2>
      <h4>Project Architect <span>– Architecture Office Eero Korhonen Oy, Helsinki (1.2023 – now)</span> </h4>
      <h4>Architect <span>– Architecture Office Pet Michael Oy, Helsinki (1.2022 – 12.2022)</span> </h4>
      <h4>Assistant Architect <span>– H-K Architects, Helsinki (1.2023 – now)</span> </h4>
      <h4>Assistant Architect <span>– Powerhouse Company, Helsinki (1.2023 – now)</span> </h4>
    
      <h2 style={{ textAlign: "left" }}>Education</h2>
      <h4><b>Hive Helsinki, Finland</b> <span> Software Engineering 04.2024 – now</span></h4>
      <h4><b>Aalto University, Finland</b> <span> Master of Science in Architecture  2019–2021</span></h4>
      <h4><b>Southeast University, China</b> <span> Bachelor of Science in Architecture  2014–2019</span></h4>
      <h4><b>Iowa State University, USA</b> <span> Exchange study 2018</span></h4>

      {/* 🩵 adding all the sub components */}
      <Project/>
      <Contact/>
      <Gallery/>

    </div>
    
  )
}

export default App
