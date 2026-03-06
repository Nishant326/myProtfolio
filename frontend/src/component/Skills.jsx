import { useState, useEffect, useRef } from "react";
import "./badge.css";


const ALL_SKILLS = [
  // Frontend
  { id: 1, name: "React",       icon: "⚛️",  category: "Frontend",  level: 90, accent: "#61dafb", desc: "Build dynamic UIs with hooks, context, custom components and performance optimizations.", tags: ["Hooks", "Context API", "React Router", "Redux"] },
  { id: 2, name: "JavaScript",  icon: "🟨",  category: "Frontend",  level: 88, accent: "#f7df1e", desc: "ES6+, async/await, closures, prototypes — deep understanding of the language core.", tags: ["ES6+", "Async/Await", "DOM", "Fetch API"] },
  { id: 3, name: "Tailwind CSS",icon: "🌊",  category: "Frontend",  level: 85, accent: "#38bdf8", desc: "Utility-first styling for fast, responsive, pixel-perfect layouts without leaving JSX.", tags: ["Responsive", "Dark Mode", "Custom Config", "Animations"] },
  { id: 4, name: "CSS",         icon: "🎨",  category: "Frontend",  level: 82, accent: "#264de4", desc: "Flexbox, Grid, custom animations, pseudo-elements and advanced selectors.", tags: ["Flexbox", "Grid", "Animations", "Variables"] },

  // Backend
  { id: 5, name: "Node.js",     icon: "🟢",  category: "Backend",   level: 84, accent: "#68a063", desc: "Server-side JavaScript — event loop, streams, file system and building REST APIs.", tags: ["REST APIs", "File System", "Streams", "NPM"] },
  { id: 6, name: "Express.js",  icon: "🚂",  category: "Backend",   level: 82, accent: "#999",    desc: "Minimal, fast web framework for Node — middleware, routing, error handling.", tags: ["Middleware", "Routing", "Auth", "REST"] },
  { id: 7, name: "Java",        icon: "☕",  category: "Backend",   level: 75, accent: "#f89820", desc: "OOP fundamentals, data structures, algorithms and core Java for backend logic.", tags: ["OOP", "Collections", "Multithreading", "DSA"] },

  // Database
  { id: 8, name: "MongoDB",     icon: "🍃",  category: "Database",  level: 80, accent: "#47a248", desc: "NoSQL document database — schema design, aggregation pipelines and Mongoose ODM.", tags: ["Mongoose", "Aggregation", "Atlas", "Indexes"] },
  { id: 9, name: "MySQL",       icon: "🐬",  category: "Database",  level: 76, accent: "#00758f", desc: "Relational database design, complex JOINs, stored procedures and query optimization.", tags: ["SQL", "Joins", "Indexes", "Transactions"] },

  // Tools
  { id: 10, name: "Postman",    icon: "📮",  category: "Tools",     level: 88, accent: "#ff6c37", desc: "API testing, collections, environment variables, automated tests and documentation.", tags: ["API Testing", "Collections", "Environments", "Mocking"] },
  { id: 11, name: "Git",        icon: "🌿",  category: "Tools",     level: 82, accent: "#f05032", desc: "Version control — branching strategies, rebasing, pull requests and conflict resolution.", tags: ["Branching", "Rebase", "PRs", "GitHub"] },
  { id: 12, name: "VS Code",    icon: "💙",  category: "Tools",     level: 92, accent: "#007acc", desc: "Extensions, snippets, debugging, multi-cursor and workspace customization.", tags: ["Extensions", "Debugging", "Snippets", "Tasks"] },
];

const CATEGORIES = ["All", "Frontend", "Backend", "Database", "Tools"];

function SkillCard({ skill, selected, onClick, animate }) {
  const barRef = useRef(null);

  useEffect(() => {
    if (animate && barRef.current) {
      setTimeout(() => {
        if (barRef.current) barRef.current.style.width = skill.level + "%";
      }, 100);
    }
  }, [animate, skill.level]);

  return (
    <div
      className={`skill-card ${selected ? "selected" : ""}`}
      style={{ "--accent": skill.accent }}
      onClick={() => onClick(skill)}
    >
      <span className="skill-icon">{skill.icon}</span>
      <span className="skill-name">{skill.name}</span>
      <div className="skill-bar-wrap">
        <div ref={barRef} className="skill-bar-fill" style={{ width: "0%" }} />
      </div>
    </div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedSkill, setSelectedSkill] = useState(ALL_SKILLS[0]);
  const [animate, setAnimate] = useState(false);
  const detailBarRef = useRef(null);

  const filtered = activeCategory === "All"
    ? ALL_SKILLS
    : ALL_SKILLS.filter(s => s.category === activeCategory);

  useEffect(() => {
    setAnimate(false);
    const t = setTimeout(() => setAnimate(true), 50);
    return () => clearTimeout(t);
  }, [activeCategory]);

  useEffect(() => {
    if (detailBarRef.current) {
      detailBarRef.current.style.width = "0%";
      setTimeout(() => {
        if (detailBarRef.current) detailBarRef.current.style.width = selectedSkill.level + "%";
      }, 100);
    }
  }, [selectedSkill]);

  return (
    <>
      <section className="skills-section" id="skills">
        <div className="bg-glow-left" />
        <div className="bg-glow-right" />

        <div className="skills-container">
          {/* Header */}
          <div className="section-eyebrow">
            <span className="eyebrow-dot" /> Tech Stack
          </div>
          <h2 className="skills-title">Skills & <em>Expertise</em></h2>
          <p className="skills-sub">Click any skill to explore it in detail</p>

          {/* Filter tabs */}
          <div className="filter-tabs">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                className={`filter-tab ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Skills grid */}
          <div className="skills-grid">
            {filtered.map(skill => (
              <SkillCard
                key={skill.id}
                skill={skill}
                selected={selectedSkill?.id === skill.id}
                onClick={setSelectedSkill}
                animate={animate}
              />
            ))}
          </div>

          {/* Detail panel */}
          {selectedSkill && (
            <div className="detail-panel" key={selectedSkill.id} style={{ "--accent2": selectedSkill.accent }}>
              <div className="detail-left">
                <span className="detail-icon-big">{selectedSkill.icon}</span>
                <div className="detail-name">{selectedSkill.name}</div>
                <div className="detail-category">{selectedSkill.category}</div>
                <p className="detail-desc">{selectedSkill.desc}</p>
              </div>
              <div className="detail-right">
                <div className="detail-label">Proficiency</div>
                <div className="detail-pct">{selectedSkill.level}%</div>
                <div className="detail-big-bar-wrap">
                  <div ref={detailBarRef} className="detail-big-bar-fill" style={{ width: "0%" }} />
                </div>
                <div style={{ marginBottom: 24 }} />
                <div className="detail-label">I use it for</div>
                <div className="detail-tags">
                  {selectedSkill.tags.map(t => (
                    <span key={t} className="detail-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Stats */}
          <div className="stats-row">
            <div className="stat-card">
              <span className="stat-num">12+</span>
              <span className="stat-label">Technologies</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">2+</span>
              <span className="stat-label">Years Learning</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">20+</span>
              <span className="stat-label">Projects Built</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}