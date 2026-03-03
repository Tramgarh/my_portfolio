import { useCallback, useEffect, useState } from "react";

const Nav = () => {
  const [active, setActive] = useState("home");
  const pages = ["Home","About","Skills","Projects","Upcoming","Contact"];

  useEffect(() => {
    const ios = pages.map(p => {
      const el = document.getElementById(p.toLowerCase());
      if (!el) return null;
      const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setActive(p.toLowerCase()); }, { rootMargin:"-40% 0px -55% 0px" });
      io.observe(el); return io;
    }).filter(Boolean);
    return () => ios.forEach(io => io.disconnect());
  }, []);

  const go = useCallback((e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 86, behavior:"smooth" });
    setActive(id);
  }, []);

  return (
    <div style={{ position:"fixed",top:0,left:0,right:0,zIndex:100,display:"flex",justifyContent:"center",padding:"13px 24px",pointerEvents:"none" }}>
      <nav className="nav-pill" style={{ pointerEvents:"all" }}>
        <span style={{ width:57,height:27,background:"#1a1916",borderRadius:"20%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:".7rem",color:"white",fontWeight:700,marginRight:6,flexShrink:0,userSelect:"none" }}>ThinkX</span>
        {pages.map(p => (
          <a key={p} href={`#${p.toLowerCase()}`} className={`nitem${active===p.toLowerCase()?" act":""}`} onClick={e=>go(e,p.toLowerCase())}>{p}</a>
        ))}
      </nav>
    </div>
  );
}

export default Nav