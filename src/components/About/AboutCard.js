import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Sree Prathaa</span>{" "}
            from <span className="purple">Salem, India</span>.
            <br />
            I’m currently pursuing my bachelor's degree in Computer Science and Engineering at Ksr College of Engineering{" "}
            <span className="purple">Aspiring Engineer </span> 
            <span className="purple">Who Loves to code and develop </span>.
            <br />
            
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Dancing 💃
 
            </li>
            <li className="about-activity">
              <ImPointRight /> Drawing Portraits ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sree Prathaa</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
