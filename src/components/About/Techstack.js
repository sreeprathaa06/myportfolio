import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiNextdotjs, SiSolidity } from "react-icons/si";
import { FaRust } from "react-icons/fa";
import Go from "../../Assets/TechIcons/go.svg";
import C from "../../Assets/TechIcons/C++.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import HaskellIcon from "../../Assets/TechIcons/Haskell.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Firebase from "../../Assets/TechIcons/Firebase.svg";
import Redis from "../../Assets/TechIcons/Redis.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Kubernates from "../../Assets/TechIcons/Kubernates.svg";
import Redux from "../../Assets/TechIcons/Redux.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import MUI from "../../Assets/TechIcons/MUI.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import AWS from "../../Assets/TechIcons/AWS.svg";
import Kafka from "../../Assets/TechIcons/Kafka.svg";


function Techstack() {
    const techSkills = [
        { icon: C, name: "C++" },
        { icon: Javascript, name: "Javascript" },
        { icon: Node, name: "Node.Js" },
        { icon: ReactIcon, name: "React.Js" },
        { icon: Git, name: "Git" },
        { icon: Python, name: "Python" },
        { icon: Java, name: "Java" },
        // Add more skills here if needed to fill the orbit
    ];

    return (
        <div className="skill-system">
            <div className="skill-sun">
                <span>Skillset</span>
            </div>
            <div className="orbit-container">
                {techSkills.map((skill, index) => (
                    <div
                        className="planet-socket"
                        style={{ '--i': index, '--total': techSkills.length }}
                        key={index}
                    >
                        <div className="planet-counter-rotator">
                            <div className="planet-card-animator">
                                <div className="tech-icons">
                                    <img src={skill.icon} alt={skill.name} />
                                    <div className="tech-icons-text">{skill.name}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Techstack;
