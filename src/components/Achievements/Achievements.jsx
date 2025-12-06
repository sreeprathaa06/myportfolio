import React from "react";
import "./Achievements.css";
import avatar from "../../Assets/avatar.png";

const achievementsData = [
  {
    title: "Web Designing (1st Place)",
    issuer: "St. Josephs MHSS, Salem",
    year: "2023",
    badge: "https://img.icons8.com/color/96/trophy.png",
    description: "Won 1st place in Web Designing competition."
  },
  {
    title: "Web Designing (2nd Place)",
    issuer: "Holycross MHSS, Salem",
    year: "2023",
    badge: "https://img.icons8.com/color/96/medal.png",
    description: "Secured 2nd place in Web Designing contest."
  },
  {
    title: "English Quiz (2nd Place)",
    issuer: "Holycross MHSS, Salem",
    year: "2023",
    badge: "https://img.icons8.com/color/96/books.png",
    description: "Won 2nd place in English Quiz competition."
  },
  {
    title: "40+ Stage Events (Dancing)",
    issuer: "Cultural Events",
    year: "2020-2024",
    badge: "https://img.icons8.com/color/96/dance.png",
    description: "Performed in more than 40 stage events in dancing."
  },
  {
    title: "Department Topper (1st Sem)",
    issuer: "KSR College, Tiruchengode",
    year: "2024",
    badge: "https://img.icons8.com/color/96/student-center.png",
    description: "Achieved top rank in the department in the 1st semester."
  },
  {
    title: "Code Debugging (2nd Place)",
    issuer: "K.S.R.College, Tiruchencode",
    year: "2024",
    badge: "https://img.icons8.com/color/96/code.png",
    description: "Awarded 2nd prize in Code Debugging competition."
  },
  {
    title: "Debugging (3rd Place)",
    issuer: "KSR College of Engineering",
    year: "2024",
    badge: "https://img.icons8.com/color/96/bug.png",
    description: "Won 3rd place in debugging contest."
  },
  {
    title: "TN WISE Hackathon",
    issuer: "Sona College of Engineering",
    year: "2024",
    badge: "https://img.icons8.com/color/96/hacker.png",
    description: "Participated in TN WISE hackathon."
  },
  {
    title: "Abacus & Skill Dev (10 Levels)",
    issuer: "BRAINOBRAIN",
    year: "2020",
    badge: "https://img.icons8.com/color/96/calculator.png",
    description: "Completed 10 Levels in BRAINOBRAIN Advanced Abacus Programme."
  },
  {
    title: "Startup Pitch (Smart Card)",
    issuer: "Startup TN",
    year: "2024",
    badge: "https://img.icons8.com/color/96/idea.png",
    description: "Received Smart Card from Startup TN for pitching a start-up idea."
  },
  {
    title: "IoT Certification (Elite + Silver)",
    issuer: "NPTEL",
    year: "2024",
    badge: "https://img.icons8.com/color/96/internet.png",
    description: "Certified with Elite + Silver in Introduction to Internet of Things."
  }
];

function Achievements() {
  return (
    <div className="achievements-container">
      <h1 className="achievements-title">My Journey & Achievements</h1>

      <div className="roadmap-section">
        <div className="roadmap-wrapper">
          <svg className="roadmap-svg" viewBox="0 0 3200 400" preserveAspectRatio="none">
            <path
              className="roadmap-path"
              d="M 0 200 
                 C 400 50, 600 50, 800 200 
                 C 1000 350, 1200 350, 1600 200
                 C 2000 50, 2200 50, 2400 200
                 C 2600 350, 2800 350, 3200 200"
              fill="none"
              stroke="#8a49a8"
              strokeWidth="10"
            />
            <path
              className="roadmap-path-glow"
              d="M 0 200 
                 C 400 50, 600 50, 800 200 
                 C 1000 350, 1200 350, 1600 200
                 C 2000 50, 2200 50, 2400 200
                 C 2600 350, 2800 350, 3200 200"
              fill="none"
              stroke="#c770f0"
              strokeWidth="3"
              strokeDasharray="15, 15"
            />
          </svg>

          {/* Start and End Labels */}
          <div className="roadmap-start-label">Let's start</div>
          <div className="roadmap-end-label">Lot more to achieve</div>

          {/* Avatar Moving Along Path */}
          <div className="roadmap-avatar-container">
            <img src={avatar} alt="Traveler" className="roadmap-avatar" />
          </div>

          {/* Achievement Nodes */}
          <div className="roadmap-items">
            {achievementsData.map((item, index) => (
              <div key={index} className={`roadmap-item item-${index + 1}`}>
                <div className="roadmap-marker"></div>
                <div className="roadmap-card">
                  <div className="card-header">
                    <img src={item.badge} alt="badge" className="card-badge" />
                    {/* Year removed as requested */}
                  </div>
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-issuer">{item.issuer}</p>
                  <p className="card-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievements;
