import { useState} from "react";
import ProjModal from "../utils/ProjModal";
import { IC } from "../utils/IC";
import { readyProjects } from "../utils/ProjData";


// const projs = [
//   {id:1,name:"SaaS Landing Page + Admin Dashboard",short:"Full SaaS with subscription tiers, role-based admin dashboard, and analytics.",desc:"Complete SaaS system: multi-page marketing site, subscription tiers, JWT-secured admin dashboard, user management, and analytics. Built for performance and conversion rate.",stack:["React.js","Node.js","MongoDB","Stripe","JWT","Tailwind"],C:IC.Lock,color:"#e8f4f0",accent:"#2d6a4f"},
//   {id:2,name:"AI Auto Reply & Lead Management",short:"AI-driven lead pipeline with automated replies, lead scoring, and CRM sync.",desc:"AI-powered lead management: auto-classifies messages, generates contextual replies via OpenAI, scores leads by behavior, routes to CRM pipelines. Real-time monitoring dashboard included.",stack:["Python","OpenAI API","Node.js","MongoDB","WebSockets"],C:IC.AI,color:"#f0ecf8",accent:"#6d4fc7"},
//   {id:3,name:"Service Website + Backend Integration",short:"High-converting service site with CMS, lead capture, and email automation.",desc:"Service-oriented landing with dynamic CMS, multi-step lead capture, Nodemailer email automation, testimonial management, and SEO optimization.",stack:["React.js","Express.js","MongoDB","Nodemailer","Tailwind"],C:IC.Monitor,color:"#fef4e8",accent:"#c47c1a"},
//   {id:4,name:"Fast E-commerce System (Smart Logic)",short:"Production e-commerce with smart inventory, dynamic pricing, optimized checkout.",desc:"Production-ready e-commerce: smart inventory management, dynamic pricing rules, abandoned cart recovery, bulk order handling, and optimized checkout flow. Built for speed and scale.",stack:["Next.js","Node.js","MongoDB","Redis","Stripe","AWS S3"],C:IC.Cart,color:"#fef8e8",accent:"#b58e10"},
// ];

const projs = readyProjects

const Projects = () => {
  const [sel, setSel] = useState(null);
  return (
    <section id="projects" style={{padding:"100px 24px",background:"white"}}>
      <div style={{maxWidth:1100,margin:"0 auto"}}>
        <div className="rv" style={{marginBottom:52}}>
          <p className="slabel">Completed Work</p>
          <h2 style={{fontFamily:"'Instrument Serif',serif",fontSize:"clamp(2rem,4vw,3rem)",fontWeight:400}}>Projects &amp; <em style={{color:"#2d6a4f"}}>Case Studies</em></h2>
        </div>
        <div className="pgrid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:34,alignItems:"start"}}>
          <div className="rvl" style={{display:"flex",flexDirection:"column",gap:13}}>
            {projs.map(p=>(
              <div key={p.id} className="ptile" onClick={()=>setSel(p)} style={{background:p.color,padding:"20px 18px",display:"flex",alignItems:"center",gap:13}}>
                <div style={{width:44,height:44,borderRadius:11,background:"white",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"var(--sh)",flexShrink:0}}><p.C/></div>
                <div style={{flex:1}}>
                  <div style={{fontWeight:600,fontSize:".87rem",marginBottom:2,color:"#1a1916"}}>{p.name}</div>
                  <div style={{fontSize:".77rem",color:"#7a7670",lineHeight:1.5}}>{p.short}</div>
                </div>
                <IC.Arr/>
              </div>
            ))}
          </div>
          <div className="rvr" style={{position:"sticky",top:100}}>
            <div className="card" style={{padding:32}}>
              <div className="ibox" style={{marginBottom:14}}><IC.Cart/></div>
              <h3 style={{fontFamily:"'Instrument Serif',serif",fontSize:"1.4rem",fontWeight:400,marginBottom:10,lineHeight:1.3}}>Click any project<br/>to explore details</h3>
              <p style={{color:"#7a7670",fontSize:".9rem",lineHeight:1.75,marginBottom:20}}>Each project represents real-world production work — architecture decisions, tech stack, deployment. Click a card for full details.</p>
              <div style={{display:"flex",flexDirection:"column",gap:7}}>
                {projs.map(p=>(
                  <div key={p.id} onClick={()=>setSel(p)} style={{display:"flex",alignItems:"center",gap:9,cursor:"pointer",padding:"9px 11px",borderRadius:9,background:"#f8f7f4",border:"1px solid transparent",transition:"all .18s"}}
                    onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(45,106,79,0.22)";e.currentTarget.style.background="#f0ede8";}}
                    onMouseLeave={e=>{e.currentTarget.style.borderColor="transparent";e.currentTarget.style.background="#f8f7f4";}}
                  >
                    <div style={{width:24,height:24,borderRadius:6,background:p.color,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><p.C/></div>
                    <span style={{fontSize:".82rem",fontWeight:500,color:"#5a5752"}}>{p.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProjModal p={sel} onClose={()=>setSel(null)}/>
    </section>
  );
}

export default Projects