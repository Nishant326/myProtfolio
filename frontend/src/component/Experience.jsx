import { useState, useEffect, useRef } from "react";
import "./badge.css"

const EXPERIENCE = [
  {
    id: 1,
    icon: "🚀",
    iconBg: "rgba(255,106,0,0.1)",
    role: "Backend Developer",
    org: "Resoversity",
    location: "Startup · Remote",
    period: "2024 – Present",
    current: true,
    desc: "Working as a backend developer at Resoversity, a growing EdTech startup. Responsible for designing and building RESTful APIs, managing database architecture, handling authentication systems, and ensuring the backend infrastructure scales reliably.",
    tags: ["Node.js", "Express.js", "MongoDB", "REST APIs", "JWT Auth", "Git"],
  },
  {
    id: 2,
    icon: "🎓",
    iconBg: "rgba(238,9,121,0.1)",
    role: "Full Stack Development Trainee",
    org: "CodeZeal Pvt. Ltd.",
    location: "Training Programme · On-site",
    period: "2024 · 1 Month",
    current: false,
    desc: "Completed an intensive 1-month full stack development training programme at CodeZeal Pvt. Ltd. Gained hands-on experience across the entire web development stack — from building responsive UIs to connecting them with backend APIs and databases.",
    tags: ["React", "Node.js", "Express.js", "MySQL", "Tailwind CSS", "Postman"],
  },
];

const EDUCATION = [
  {
    id: 1,
    icon: "🏫",
    iconBg: "rgba(255,106,0,0.1)",
    degree: "Diploma in Computer Science & Engineering",
    org: "Silli Polytechnic, Silli",
    location: "Jharkhand, India",
    period: "2023 – 2026",
    current: true,
    desc: "Pursuing a Diploma in Computer Science & Engineering with a focus on core programming, web technologies, database management, and software development fundamentals. Graduating in 2026.",
    tags: ["Computer Science", "Web Development", "DBMS", "Programming", "Networking"],
    highlight: "🎓 Expected Passout — 2026",
  },
];

function TimelineItem({ item, isEdu }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={`timeline-item ${visible ? "visible" : ""}`}>
      <div className="timeline-dot" />
      <div className="timeline-card">
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <div>
            <div className="card-icon-wrap" style={{ background: item.iconBg }}>{item.icon}</div>
            {isEdu && <div className="edu-degree">{item.degree}</div>}
            <div className="card-role">{isEdu ? item.org : item.role}</div>
            {!isEdu && <div className="card-org">{item.org}</div>}
            <div className="card-location">{item.location}</div>
          </div>
          <span className={`card-badge ${item.current ? "current" : ""}`}>
            {item.current ? "● " : ""}{item.period}
          </span>
        </div>
        <div className="card-divider" />
        <p className="card-desc">{item.desc}</p>
        <div className="card-tags">
          {item.tags.map(t => <span key={t} className="card-tag">{t}</span>)}
        </div>
        {isEdu && item.highlight && (
          <div className="edu-highlight">🎓 {item.highlight}</div>
        )}
      </div>
    </div>
  );
}

export default function Experience() {
  const [tab, setTab] = useState("experience");

  const items = tab === "experience" ? EXPERIENCE : EDUCATION;

  return (
    <>
      <section className="exp-section" id="experience">
        <div className="exp-glow-1" /><div className="exp-glow-2" />

        <div className="exp-container">
          {/* Header */}
          <div className="exp-eyebrow">
            <span className="exp-eyebrow-dot" /> Journey
          </div>
          <h2 className="exp-title">Experience &amp; <em>Education</em></h2>
          <p className="exp-sub">My professional journey and academic background</p>

          {/* Tabs */}
          <div className="tab-switcher">
            <button
              className={`tab-btn ${tab === "experience" ? "active" : ""}`}
              onClick={() => setTab("experience")}
            >
              💼 Experience
            </button>
            <button
              className={`tab-btn ${tab === "education" ? "active" : ""}`}
              onClick={() => setTab("education")}
            >
              🎓 Education
            </button>
          </div>

          {/* Timeline */}
          <div className="timeline" key={tab}>
            {items.map(item => (
              <TimelineItem key={item.id} item={item} isEdu={tab === "education"} />
            ))}
          </div>

          {/* Stats */}
          <div className="exp-stats">
            <div className="exp-stat">
              <span className="exp-stat-num">2</span>
              <span className="exp-stat-label">Companies</span>
            </div>
            <div className="exp-stat">
              <span className="exp-stat-num">1+</span>
              <span className="exp-stat-label">Years Experience</span>
            </div>
            <div className="exp-stat">
              <span className="exp-stat-num">2026</span>
              <span className="exp-stat-label">Graduating</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}