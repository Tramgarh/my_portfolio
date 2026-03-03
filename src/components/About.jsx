import { IC } from "../utils/IC";


const About = () => {
  const groups = [
    {label:"Frontend",color:"#2d6a4f",items:["React.js","Next.js","JavaScript (ES6+)","HTML5 & CSS3","Tailwind CSS","Responsive Design"]},
    {label:"Backend",color:"#c47c1a",items:["Node.js","Express.js","REST API (Advanced)","API Architecture","JWT Auth","WebSockets"]},
    {label:"Database",color:"#6d4fc7",items:["MongoDB","Mongoose Schema","Aggregation Pipelines","Database Indexing"]},
    {label:"Other",color:"#0891b2",items:["Python (ML basics)","Flutter & Dart","AI Workflow Automation","Lead Management","SaaS Systems","E-commerce Logic","Admin Dashboards"]},
  ];
  return (
    <section id="about" style={{padding:"100px 24px",background:"white"}}>
      <div style={{maxWidth:1100,margin:"0 auto"}}>
        <div className="rv" style={{marginBottom:54}}>
          <p className="slabel">About Me</p>
          <h2 style={{fontFamily:"'Instrument Serif',serif",fontSize:"clamp(2rem,4vw,3rem)",fontWeight:400,lineHeight:1.2,maxWidth:540}}>
            Building systems that <em style={{color:"#2d6a4f"}}>actually scale</em>
          </h2>
        </div>
        <div style={{display:"flex",gap:56,flexWrap:"wrap"}} className="aboutcols">
          <div className="rvl" style={{flex:"1",minWidth:280}}>
            <div style={{borderLeft:"3px solid #2d6a4f",paddingLeft:20,marginBottom:26}}>
              <p style={{color:"#5a5752",lineHeight:1.85,fontSize:"1rem"}}>
                Full Stack MERN developer with hands-on experience building scalable SaaS platforms, API-first web apps, and intelligent automation systems. I focus on clean, maintainable code that solves real business problems.
              </p>
            </div>
            <p style={{color:"#7a7670",lineHeight:1.8,marginBottom:14}}>My work spans the entire stack — MongoDB database architecture, RESTful API design, to React interfaces that convert visitors into customers. I've built e-commerce systems with smart logic, AI-powered lead management workflows, and multi-tenant SaaS platforms.</p>
            <p style={{color:"#7a7670",lineHeight:1.8}}>I also bring Python ML fundamentals for data pipelines, Flutter for cross-platform basics, and a growing expertise in AI automation — systems that run intelligently 24/7 without manual intervention.</p>
            <div style={{marginTop:26,display:"flex",flexWrap:"wrap",gap:8}}>
              {["React.js","Node.js","MongoDB","AI Automation","SaaS"].map(t=>(
                <span key={t} style={{background:"#f0ede8",border:"1px solid rgba(0,0,0,0.07)",borderRadius:8,padding:"5px 12px",fontSize:".8rem",fontWeight:500,color:"#5a5752"}}>{t}</span>
              ))}
            </div>
            <div style={{marginTop:22,display:"flex",gap:10}}>
              <a href="#projects" className="btn btn-d">See My Work</a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-o" style={{display:"flex",alignItems:"center",gap:6}}><IC.Github/>GitHub</a>
            </div>
          </div>
          <div className="rvr" style={{flex:"1",minWidth:280}}>
            {groups.map(g=>(
              <div key={g.label} style={{marginBottom:18}}>
                <div style={{fontSize:".72rem",fontWeight:700,letterSpacing:2,textTransform:"uppercase",color:g.color,marginBottom:8}}>{g.label}</div>
                <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
                  {g.items.map(s=>(
                    <span key={s} style={{background:`${g.color}10`,border:`1px solid ${g.color}22`,borderRadius:7,padding:"4px 11px",fontSize:".79rem",color:g.color,fontWeight:500}}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About