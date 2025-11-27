import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import editor from "../../Assets/Projects/codeEditor.jpeg";
import chatify from "../../Assets/Projects/chatify.jpeg";

import bitsOfCode from "../../Assets/Projects/blog.jpeg";
import img1 from "../../Assets/Projects/leaf.jpeg";

import img2 from "../../Assets/Projects/suicide.jpg";
import img3 from "../../Assets/Projects/portfolio.jpeg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Skill Connect"
              description="A mobile-friendly platform designed to help blue-collar workers discover nearby job opportunities."
              ghLink="https://github.com/sreeprathaa06"
  
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Fashionista"
              description="Fashionista is a fashion customization app where users can design their own outfits with the guidance of skilled tailors and designers."
              ghLink="https://github.com/sreeprathaa06"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="RouteMate"
              description="RouteMate helps users track nearby buses, view live locations, and know accurate arrival times, making public transport more accessible—especially for rural and village communities."
              ghLink="https://github.com/sreeprathaa06"

              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img2}
              isBlog={false}
              title="Healon"
              description="Heal-On bridges the rural healthcare gap with AI-driven health assessments, virtual doctor support, and real-time medicine availability."
              ghLink="https://github.com/sreeprathaa06"

              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img1}
              isBlog={false}
              title="Nostra"

              description="This project involves designing and developing a modern, visually captivating fashion website that serves as a digital runway for showcasing stylish collections."
              ghLink="https://github.com/sreeprathaa06"

              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col><Col md={4} className="project-card">
            <ProjectCard
              imgPath={img3}
              isBlog={false}
              title="Portfolio Website"
              description="A personal portfolio website to showcase my skills, projects, and experience in a visually appealing manner."
              ghLink="https://github.com/sreeprathaa06"

              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
          


          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
