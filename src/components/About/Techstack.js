import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import C from "../../Assets/TechIcons/C++.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Java from "../../Assets/TechIcons/Java.svg";

function Techstack() {
    const techSkills = [
        { id: "cpp", img: C, name: "C++" },
        { id: "javascript", img: Javascript, name: "JavaScript" },
        { id: "node", img: Node, name: "Node.js" },
        { id: "react", img: ReactIcon, name: "React" },
        { id: "git", img: Git, name: "Git" },
        { id: "python", img: Python, name: "Python" },
        { id: "java", img: Java, name: "Java" },
    ];

    const iconsRef = useRef([]);

    useEffect(() => {
        // Initial entrance animation from bottom
        gsap.fromTo(
            iconsRef.current,
            {
                y: 100,
                opacity: 0,
                scale: 0.5,
            },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.8,
                ease: "back.out(1.7)",
                stagger: 0.1,
            }
        );

        // Continuous pop animation
        iconsRef.current.forEach((icon, index) => {
            gsap.to(icon, {
                y: -20,
                duration: 0.6,
                ease: "power1.inOut",
                repeat: -1,
                yoyo: true,
                delay: index * 0.15,
            });
        });
    }, []);

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '30px',
            padding: '40px 20px',
            flexWrap: 'wrap',
        }}>
            {techSkills.map((skill, index) => (
                <div
                    key={skill.id}
                    ref={(el) => (iconsRef.current[index] = el)}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        cursor: 'pointer',
                    }}
                >
                    <img
                        src={skill.img}
                        alt={skill.name}
                        style={{
                            width: '80px',
                            height: '80px',
                            objectFit: 'contain',
                            filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))',
                        }}
                    />
                </div>
            ))}
        </div>
    );
}

export default Techstack;
