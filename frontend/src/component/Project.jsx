import { useState } from "react";
import "./badge.css";


// ✏️ Replace with your actual projects
const PROJECTS = [
  {
    id: 1,
    title: " College Webiste",
    description: "Full Stack College Webiste for intractive web page and fully authenticated",
    tech: ["React", "Node.js", "My Sql"],
    thumbnail: "assests/image/collegeweb.png", // e.g. "/thumbs/ecommerce.jpg"
    video: "assests/videos/collegeweb1.mp4",     // e.g. "/videos/ecommerce.mp4"  ← your local video file
    duration: "1:24",
    emoji: "🛒",
    githubUrl: "https://github.com/Nishant326/Sillli-Polytechnic",
  },


];

export default function Projects() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <>
   
      <section className="projects-section" id="projects">
        <div className="projects-glow" />
        <div className="projects-container">

          {/* Header */}
          <div className="section-tag">
            <span>▸</span> My Work
          </div>
          <h2 className="section-title">
            Projects I've <em>Built</em>
          </h2>
          <p className="section-sub">Click any card to watch a demo video</p>

          {/* Grid */}
          <div className="projects-grid">
            {PROJECTS.map(project => (
              <div
                key={project.id}
                className="project-card"
                onClick={() => project.video && setActiveVideo(project)}
              >
                {/* Thumbnail + play button */}
                <div className="video-wrapper">
                  {project.thumbnail ? (
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="video-thumbnail"
                    />
                  ) : (
                    <div className="thumb-placeholder">{project.emoji}</div>
                  )}

                  <div className="video-overlay" />

                  {/* Tech chips */}
                  <div className="tech-chips">
                    {project.tech.map(t => (
                      <span key={t} className="tech-chip">{t}</span>
                    ))}
                  </div>

                  {/* Play button */}
                  <div className="play-btn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>

                  {/* Duration */}
                  <span className="duration-badge">{project.duration}</span>
                </div>

                {/* Card body */}
                <div className="card-body">
                  <h3 className="card-title">{project.title}</h3>
                  <p className="card-desc">{project.description}</p>
                  <div className="card-footer">
                    <div className="card-links">
                      <a
                        href={project.githubUrl}
                        className="link-btn link-github"
                        onClick={e => e.stopPropagation()}
                        target="_blank" rel="noreferrer"
                      ><i class="fa-solid fa-code-branch"></i>
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {activeVideo && (
        <div className="modal-backdrop" onClick={() => setActiveVideo(null)}>
          <div className="modal-inner" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveVideo(null)}>✕</button>
            <video
              className="modal-video"
              src={activeVideo.video}
              controls
              autoPlay
              poster={activeVideo.thumbnail}
            />
            <p className="modal-title">{activeVideo.title}</p>
          </div>
        </div>
      )}
    </>
  );
}