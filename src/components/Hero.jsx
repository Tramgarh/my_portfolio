import { useEffect, useState } from "react";
import { IC } from "../utils/IC";


const Hero = () => {
  const [counts, setCounts] = useState({ p: 0, s: 0 });
  useEffect(() => {
    let p = 0, s = 0; const t = setInterval(() => {
      if (p < 12) p++; if (s < 4) s++; setCounts({ p, s }); if (p >= 12 && s >= 4) clearInterval(t);
    }, 80); return () => clearInterval(t);
  }, []);

  return (
    <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "100px 24px 60px", position: "relative", overflow: "hidden" }}>
      {/* Dot grid */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, backgroundImage: "radial-gradient(rgba(45,106,79,0.11) 1px,transparent 1px)", backgroundSize: "30px 30px", maskImage: "radial-gradient(ellipse 65% 80% at 100% 50%,black,transparent)", pointerEvents: "none" }} />
      {/* Rings */}
      {[[260, "14s", "0s"], [390, "19s", "3s"], [520, "24s", "6s"]].map(([sz, dr, dl], i) => (
        <div key={i} className="hring" style={{ width: sz, height: sz, top: "50%", right: -sz / 4, marginTop: -sz / 2, animationDuration: dr, animationDelay: dl, border: `1px solid rgba(45,106,79,${0.09 - i * 0.02})` }} />
      ))}

      <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>
        <div className="hgrid" style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "76px", alignItems: "center" }}>
          {/* Photo card */}
          <div style={{ animation: "fadeUp .8s ease forwards", opacity: 0, animationDelay: ".1s" }}>
            <div style={{ position: "relative" }}>
              <div style={{ width: 236, height: 274, borderRadius: 22, background: "linear-gradient(145deg,#ebe7e2,#d4cfc8)", boxShadow: "0 16px 56px rgba(0,0,0,0.12),0 0 0 1px rgba(255,255,255,0.7)", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                {/* Profile Image - Added here */}
                <img
                  src="../../profile_img.jpg"
                  alt="Developer Profile"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 1
                  }}
                />
                {/* Overlay gradient for better text visibility (optional) */}
                {/* <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '40%',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)',
                  zIndex: 2
                }} /> */}

                {/* Avatar - This will show on top of the image */}
                {/* <div style={{ textAlign: "center", position: 'relative', zIndex: 3 }}>
                  <div style={{ width: 78, height: 78, borderRadius: "50%", background: "rgba(255,255,255,0.95)", margin: "0 auto 10px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 24px rgba(0,0,0,0.2)", border: '2px solid white' }}>
                    <svg viewBox="0 0 40 40" width="34" height="34" fill="none">
                      <circle cx="20" cy="15" r="7" stroke="#2d6a4f" strokeWidth="1.7" />
                      <path d="M6 36c0-8 6-13 14-13s14 5 14 13" stroke="#2d6a4f" strokeWidth="1.7" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div style={{ fontSize: ".74rem", color: "white", fontWeight: 500, textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>Full Stack Dev</div>
                </div> */}

                {/* Corner brackets */}
                {[{ t: 10, r: 10, tr: true }, { b: 10, l: 10, bl: true }].map((c, i) => (
                  <div key={i} style={{
                    position: "absolute",
                    top: c.t, right: c.r, bottom: c.b, left: c.l,
                    width: 16, height: 16,
                    borderColor: 'rgba(255,255,255,0.8)',
                    ...(c.tr ? {
                      borderTop: "2px solid rgba(255,255,255,0.8)",
                      borderRight: "2px solid rgba(255,255,255,0.8)",
                      borderRadius: "0 5px 0 0"
                    } : {
                      borderBottom: "2px solid rgba(255,255,255,0.8)",
                      borderLeft: "2px solid rgba(255,255,255,0.8)",
                      borderRadius: "0 0 0 5px"
                    }),
                    zIndex: 4
                  }} />
                ))}

                {/* Orbiting dot */}
                <div style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  marginTop: -50,
                  marginLeft: -50,
                  width: 100,
                  height: 100,
                  animation: "orbSpin 8s linear infinite",
                  pointerEvents: "none",
                  zIndex: 5
                }}>
                  <div style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.8)",
                    boxShadow: "0 0 8px rgba(255,255,255,0.6)"
                  }} />
                </div>

                <div style={{
                  position: "absolute",
                  top: "90%",
                  left: "90%",
                  marginTop: -50,
                  marginLeft: -50,
                  width: 100,
                  height: 100,
                  animation: "orbSpin 8s linear infinite",
                  pointerEvents: "none",
                  zIndex: 5
                }}>
                  <div style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.8)",
                    boxShadow: "0 0 8px rgba(79, 67, 67, 0.6)"
                  }} />
                </div>
              </div>

              {/* Badges */}
              <div style={{
                position: "absolute",
                bottom: -14,
                right: -18,
                background: "white",
                border: "1px solid rgba(0,0,0,0.07)",
                borderRadius: 12,
                padding: "9px 13px",
                boxShadow: "var(--sh2)",
                display: "flex",
                alignItems: "center",
                gap: 7,
                fontSize: ".75rem",
                fontWeight: 600,
                whiteSpace: "nowrap",
                zIndex: 10
              }}>
                <span style={{
                  width: 7,
                  height: 7,
                  background: "#22c55e",
                  borderRadius: "50%",
                  animation: "dotPulse 2s ease-in-out infinite",
                  display: "inline-block"
                }} />
                Available for work
              </div>

              <div style={{
                position: "absolute",
                top: -12,
                left: -12,
                background: "#1a1916",
                color: "white",
                borderRadius: 10,
                padding: "7px 11px",
                fontSize: ".72rem",
                fontWeight: 700,
                boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
                letterSpacing: .5,
                zIndex: 10
              }}>5+ YRS</div>
            </div>
          </div>

          {/* Text */}
          <div>
            <div style={{ animation: "fadeUp .7s ease forwards", opacity: 0, animationDelay: ".2s" }}>
              <span className="chip"><IC.Star /> MERN · AI · SaaS · Automation</span>
            </div>
            <h1 style={{ fontFamily: "'Instrument Serif',serif", fontSize: "clamp(2.4rem,5vw,4rem)", fontWeight: 400, lineHeight: 1.12, marginTop: 18, marginBottom: 14, animation: "fadeUp .7s ease forwards", opacity: 0, animationDelay: ".35s" }}>
              Full Stack MERN<br /><em style={{ color: "#2d6a4f" }}>&amp; Automation</em><br />Developer
            </h1>
            <p style={{ fontSize: "1rem", color: "#7a7670", maxWidth: 460, lineHeight: 1.78, marginBottom: 12, animation: "fadeUp .7s ease forwards", opacity: 0, animationDelay: ".5s" }}>
              I build scalable web applications, SaaS platforms, automation systems, and intelligent AI workflows.
            </p>
            <p style={{ fontSize: ".9rem", color: "#9a9690", maxWidth: 420, lineHeight: 1.7, marginBottom: 34, animation: "fadeUp .7s ease forwards", opacity: 0, animationDelay: ".6s" }}>
              From React frontends to MongoDB backends, clean API architecture to AI-powered lead pipelines — I ship systems that work at scale.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", animation: "fadeUp .7s ease forwards", opacity: 0, animationDelay: ".75s" }}>
              <a href="#projects" className="btn btn-d">View Projects <IC.Arr /></a>
              <a href="#contact" className="btn btn-o">Contact Me</a>
            </div>
            {/* Stats */}
            <div style={{ display: "flex", gap: 32, marginTop: 40, paddingTop: 26, borderTop: "1px solid rgba(0,0,0,0.06)", animation: "fadeUp .7s ease forwards", opacity: 0, animationDelay: ".9s" }}>
              {[[counts.p + "+", "Projects"], [counts.s + "+", "Stacks"], ["24h", "Response"]].map(([n, l]) => (
                <div key={l}><div className="stat-n">{n}</div><div style={{ fontSize: ".78rem", color: "#b0aca6" }}>{l}</div></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero