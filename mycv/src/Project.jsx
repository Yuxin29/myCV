import React from "react";
import './Project.css'

import solongVideo from "./assets/solong.webm";
import libftImage from "./assets/libft.png";

function Project() {
    return (
        <div id="project">
            <h2>Programming Projects (Hive Helsinki)</h2>

            <div className="project-card">
                <video
                    className="project-video"
                    src={solongVideo}
                    controls
                    loop
                    muted
                    playsInline
                    preload="metadata"
                >
                    Your browser does not support the video tag.
                </video>

                <div className="project-text">
                    <h4>
                        <a href="https://github.com/Yuxin29/Solong.git"
                           target="_blank"
                           rel="noreferrer"
                           style={{ textDecoration: "none", color: "inherit" }}>
                           <b>Mushroom_picker (C)</b>
                        </a>
                        <span> — a 2D game where a Shiba picks up boletus.</span>
                    </h4>
                    <p>
                        Mushroom_picker is a 2D adventure game built with C and MLX42, 
                        where a Shiba Inu collects mushrooms in the forest. 
                        I designed the movement logic, map parsing, and sprite animation system. 
                        This project helped me understand event handling, 
                        image rendering, and performance optimization in real-time graphics.
                    </p>
                </div>
            </div>

            <div className="project-card">
                <img
                    className="project-media"
                    src={libftImage}
                    alt="Libft project preview"
                />

                <div className="project-text">
                    <h4>
                        <a href="https://github.com/Yuxin29/Mini_C_Library.git"
                           target="_blank"
                           rel="noreferrer"
                           style={{ textDecoration: "none", color: "inherit" }}>
                           <b>MiniLibft (C)</b>
                        </a>
                        <span> — self-implemented C standard library functions.</span>
                    </h4>
                    <p>
                        MiniLibft is a project where I reimplemented several core functions from the C standard library. The goal was to understand the inner workings of common library functions such as malloc, free, strcpy, strlen, and more. This project provided me with a deep understanding of memory management and the importance of efficient, error-free coding when dealing with low-level operations.
                    </p>
                </div>
            </div>

            <h4>
            <a href="https://github.com/Yuxin29/minishell" target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
            <b>MiniShell (C)</b>
            </a>
            <span> Self-implemented Bash to practice command parsing, system calls and process management. </span>
            </h4>
            <p>MiniShell is a simplified version of the Bash shell built in C. It includes essential features like executing commands, handling pipes, and performing input/output redirection. The project focuses on building a functional shell with command parsing, handling of special symbols, and user input management. It allowed me to improve my understanding of system calls, process management, and file descriptors in a Unix-based environment.</p>

            <h4>
            <a href="https://github.com/Yuxin29/my_miniRT.git" target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
            <b>MiniRayTracer (C)</b>
            </a>
            <span> Created a lightweight ray tracer to explore 3D rendering algorithms. </span>
            </h4>
            <p>MiniRayTracer is a lightweight ray tracer built using C and the MLX42 graphics library. The project involves rendering simple 3D scenes by simulating the behavior of light rays as they interact with objects. I implemented basic features such as ray-object intersection, reflection, and simple lighting effects. This project helped me improve my problem-solving skills in computer graphics and algorithms for 3D rendering.</p>

            <h4>
            <a href="https://github.com/Yuxin29/minishell" target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
            <b>CoinDigger (Python)</b>
            </a>
            <span> Developed a 2D game  to enhance skills OOP and interactive interfaces. </span>
            </h4>
            <p>CoinDigger is a 2D grid-based game built using Python and the Pygame library. In the game, players explore a grid filled with hidden coins, and their objective is to dig and find as many coins as possible while avoiding obstacles. This project helped me sharpen my skills in Python game development, algorithms, and object-oriented programming. It also allowed me to practice creating interactive user interfaces with Pygame.</p>

            <h4>
            <a href="https://github.com/Yuxin29/minishell" target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
            <b>C++ Modules (C++)</b>
            </a>
            <span> Object-oriented exercises to understand C++ programming principles. </span>
            </h4>
            <p>The C++ Modules project involves various exercises focused on object-oriented programming (OOP) in C++. It includes exercises on inheritance, polymorphism, templates, and other OOP principles. By implementing these modules, I strengthened my understanding of advanced C++ concepts and how to structure and manage complex systems efficiently. The project also enhanced my skills in working with memory management and template programming.</p>

        </div>
    );
}

export default Project