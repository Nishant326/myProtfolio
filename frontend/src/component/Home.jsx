import { useState } from "react";
import { Github, Linkedin, Twitter, Code2, Download } from "lucide-react"; // Install: npm install lucide-react
import "./badge.css";

const MY_PHOTO = "assests/image/myImage.png";

function Home() {
  const [imgErr, setImgErr] = useState(false);

  return (
    <>
      <section className="hero">
        <div className="hero-glow"></div>
        <div className="hero-hex"></div>

        <div className="hero-inner">
          {/* LEFT SECTION */}
          <div className="hero-left">
            <div className="fade-up d1">
              <div className="badge">
                <div className="badge-inner">
                  <span className="badge-dot"></span>
                  <span className="badge-text">
                    ⚡ Available for Freelance Work
                  </span>
                </div>
              </div>
            </div>

            <div className="fade-up d2">
              <h1 className="hero-title">
                Building <br />
                <span>Fast, Modern</span> <br />
                Web Apps
              </h1>
            </div>

            <div className="fade-up d3">
              <p className="hero-body">
                I'm a <strong>Full Stack Developer</strong> who turns ideas into
                polished products — from pixel-perfect UIs to scalable backends.
                React, Node.js, and everything in between.
              </p>
            </div>

            {/* NEW DYNAMIC BUTTON SECTION */}
            {/* NEW DYNAMIC BUTTON SECTION */}
            <div className="fade-up d4 mt-8 flex flex-col sm:flex-row items-center gap-6">
              

              {/* ENHANCED SOCIAL BUTTONS WITH GLASSMORPHISM */}
              <div
                className="flex items-center gap-4 bg-transparent from-white/5 to-white/10 
                  p-3 "
              >
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative p-3.5 rounded-full 
                  bg-gradient-to-br from-white/10 to-white/5 
                  hover:from-white/20 hover:to-white/10
                  text-white transition-all duration-300 
                  hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(255,255,255,0.3)]
                  border border-white/10 hover:border-white/30"
                >
                  <Github
                    size={22}
                    className="group-hover:rotate-12 transition-transform duration-300"
                  />
                  <span
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 
                       opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300"
                  ></span>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative p-3.5 rounded-full 
                  bg-gradient-to-br from-white/10 to-white/5 
                  hover:from-white/20 hover:to-white/10
                  text-white transition-all duration-300 
                  hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(255,255,255,0.3)]
                  border border-white/10 hover:border-white/30"
                >
                  <Linkedin
                    size={22}
                    className="group-hover:rotate-12 transition-transform duration-300"
                  />
                  <span
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 
                       opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300"
                  ></span>
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative p-3.5 rounded-full 
                  bg-gradient-to-br from-white/10 to-white/5 
                  hover:from-white/20 hover:to-white/10
                  text-white transition-all duration-300 
                  hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(255,255,255,0.3)]
                  border border-white/10 hover:border-white/30"
                >
                  <Twitter
                    size={20}
                    className="group-hover:rotate-12 transition-transform duration-300"
                  />
                  <span
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 
                       opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300"
                  ></span>
                </a>

                <a
                  href="https://leetcode.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative p-3.5 rounded-full 
                  bg-gradient-to-br from-white/10 to-white/5 
                  hover:from-white/20 hover:to-white/10
                  text-white transition-all duration-300 
                  hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(255,255,255,0.3)]
                  border border-white/10 hover:border-white/30"
                >
                  <Code2
                    size={22}
                    className="group-hover:rotate-12 transition-transform duration-300"
                  />
                  <span
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 
                       opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300"
                  ></span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="hero-right slide-in">
            <div className="imgContain">
              <img
                src={MY_PHOTO}
                className="hero-photo"
                alt="MyImage"
                onError={() => setImgErr(true)}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
