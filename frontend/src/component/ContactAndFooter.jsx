import { useState } from "react";
import "./badge.css";
const CONTACT_INFO = [
  { icon: "📧", iconBg: "rgba(255,106,0,0.1)", label: "Email", value: "nishantrawani668@gmail.com", href: "mailto:nishantrawani668@gmail.com" },
  { icon: "💼", iconBg: "rgba(10,102,194,0.15)", label: "LinkedIn", value: "linkedin.com/in/nishant-rawani", href: "https://www.linkedin.com/in/nishant-rawani/" },
  { icon: "🐙", iconBg: "rgba(255,255,255,0.05)", label: "GitHub",   value: "github.com/nishant-rawani",   href: "https://github.com/Nishant326" },
];

const SOCIALS = [
  { icon: "𝕏", href: "https://x.com/rawani73023", label: "Twitter" },
  { icon: "in", href: "https://www.linkedin.com/in/nishant-rawani/", label: "LinkedIn" },
  { icon: "⌥", href: "https://github.com/Nishant326", label: "GitHub" },
];

export default function ContactAndFooter() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1500);
  };

  return (
    <>

      {/* ── CONTACT SECTION ── */}
      <section className="contact-section" id="contact">
        <div className="contact-glow" />
        <div className="contact-container">

          <div className="contact-eyebrow">
            <span className="contact-dot" /> Get In Touch
          </div>
          <h2 className="contact-title">Let's <em>Work Together</em></h2>
          <p className="contact-sub">
            Have a project in mind or want to hire me? Drop a message —
            I usually reply within 24 hours.
          </p>

          <div className="contact-grid">
            {/* Left — info */}
            <div className="contact-info">
              {CONTACT_INFO.map(item => (
                <a key={item.label} href={item.href} className="info-card" target="_blank" rel="noreferrer">
                  <div className="info-icon" style={{ background: item.iconBg }}>{item.icon}</div>
                  <div>
                    <div className="info-label">{item.label}</div>
                    <div className="info-value">{item.value}</div>
                  </div>
                </a>
              ))}

              <div className="availability-card">
                <span className="avail-dot" />
                <p className="avail-text"><strong>Available for freelance</strong> — open to full-time roles &amp; project collaborations.</p>
              </div>
            </div>

            {/* Right — form */}
            <div className="contact-form">
              {sent ? (
                <div className="success-msg">✅ Message sent! I'll get back to you soon.</div>
              ) : (
                <>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Name</label>
                      <input className="form-input" name="name" placeholder="Your name" value={form.name} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email</label>
                      <input className="form-input" name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Subject</label>
                    <input className="form-input" name="subject" placeholder="What's this about?" value={form.subject} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea className="form-textarea" name="9" placeholder="Tell me about your project or opportunity..." value={form.message} onChange={handleChange} />
                  </div>
                  <button className="submit-btn" onClick={handleSubmit} disabled={loading}>
                    {loading ? "Sending..." : "Send Message →"}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="portfolio-footer">
        <div className="footer-glow" />
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="footer-logo">⚡</div>
              <div>
                <div className="footer-name">Nishant Rawani</div>
                <div className="footer-tagline">Full Stack Developer</div>
              </div>
            </div>
            <div className="footer-socials">
              {SOCIALS.map(s => (
                <a key={s.label} href={s.href} className="social-btn" title={s.label} target="_blank" rel="noreferrer">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copy">
              © 2025 <span>Nishant Rawani</span>. All rights reserved.
            </p>
            <p className="footer-made">
              Built with <span>♥</span> using React &amp; Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}