import { IC } from "../utils/IC";


const bgIcons = [
  {C:IC.React,top:"8%",left:"3%",dur:"9s",del:"0s"},{C:IC.Node,top:"18%",right:"5%",dur:"11s",del:"1.5s"},
  {C:IC.Mongo,bottom:"25%",left:"1%",dur:"13s",del:"3s"},{C:IC.Python,top:"62%",right:"3%",dur:"10s",del:".8s"},
  {C:IC.JS,bottom:"14%",left:"17%",dur:"8s",del:"2s"},{C:IC.Flutter,top:"40%",right:"14%",dur:"14s",del:"4s"},
  {C:IC.AI,top:"76%",left:"9%",dur:"12s",del:"1s"},
];

const skCards = [
  {C:IC.Monitor,title:"Frontend Development",desc:"React.js, Next.js, JavaScript — interfaces that are fast, accessible, and pixel-perfect across all devices."},
  {C:IC.Server,title:"Backend Development",desc:"Node.js + Express.js — RESTful API design, middleware architecture, and clean server-side logic."},
  {C:IC.Db,title:"Database Architecture",desc:"MongoDB + Mongoose — schema design, aggregation pipelines, indexing for production-scale apps."},
  {C:IC.Api,title:"API Development",desc:"Advanced REST patterns, versioning, auth, documentation, and seamless third-party integrations."},
  {C:IC.Cog,title:"Automation Workflows",desc:"AI-powered auto-reply systems, lead capture pipelines, and intelligent workflows that run 24/7."},
  {C:IC.Lock,title:"SaaS System Architecture",desc:"Multi-tenant platforms with admin dashboards, subscription logic, analytics, and scalable structure."},
  {C:IC.Cart,title:"E-commerce Business Logic",desc:"Smart inventory, dynamic pricing, abandoned cart recovery, and optimized checkout flows for scale."},
];

const Skills = () => {
  return (
    <section id="skills" style={{padding:"100px 24px",position:"relative",overflow:"hidden"}}>
      {bgIcons.map(({C,...p},i)=>(
        <div key={i} className="bgico" style={{...p,animationDuration:p.dur,animationDelay:p.del,fontSize:40}}><C/></div>
      ))}
      <div style={{maxWidth:1100,margin:"0 auto",position:"relative"}}>
        <div className="rv" style={{textAlign:"center",marginBottom:58}}>
          <p className="slabel">Tech Stack</p>
          <h2 style={{fontFamily:"'Instrument Serif',serif",fontSize:"clamp(2rem,4vw,3rem)",fontWeight:400}}>Skills &amp; <em style={{color:"#2d6a4f"}}>Expertise</em></h2>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:15}}>
          {skCards.map((s,i)=>(
            <div key={s.title} className="scard rv" data-d={i*75}>
              <div className="ibox"><s.C/></div>
              <div><div style={{fontWeight:600,fontSize:".91rem",marginBottom:4}}>{s.title}</div><div style={{fontSize:".83rem",color:"#7a7670",lineHeight:1.6}}>{s.desc}</div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills