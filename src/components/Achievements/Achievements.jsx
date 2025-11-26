import React from "react";
import "./Achievements.css";

const achievementsData = [
  {
    title: "AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services",
    year: "2024",
    badge: "https://d1.awsstatic.com/training-and-certification/badges/AWS-Academy-Cloud-Foundations.9d37afb0bf.png",
  },
  {
    title: "Python Programming Certification",
    issuer: "Coursera",
    year: "2023",
    badge: "https://img.icons8.com/color/256/python.png",
  },
  {
    title: "AI & ML Virtual Internship",
    issuer: "AICTE",
    year: "2024",
    badge: "https://img.icons8.com/color/256/artificial-intelligence.png",
  },
  {
    title: "Web Development Bootcamp",
    issuer: "Udemy",
    year: "2023",
    badge: "https://img.icons8.com/color/256/html-5.png",
  },
];

function Achievements() {
  return (
    <div className="achievements-container">
      <h1 className="achievements-title">Achievements & Certifications</h1>

      <div className="achievements-grid">
        {achievementsData.map((item, index) => (
          <div key={index} className="achievement-card">
            <img src={item.badge} alt="badge" className="certificate-badge" />

            <h2 className="achievement-name">{item.title}</h2>
            <p className="achievement-issuer">{item.issuer}</p>
            <p className="achievement-year">{item.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achievements;
