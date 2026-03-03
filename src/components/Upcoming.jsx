import { useState} from "react";
import UpcModal from "../utils/UpcModal";
import { IC } from "../utils/IC";
import { upcomingProjects } from "../utils/ProjData";


const upcm = upcomingProjects

const Upcoming = () => {
  const [sel, setSel] = useState(null);
  return (
    <section id="upcoming" style={{padding:"100px 24px",background:"white"}}>
      <div style={{maxWidth:1100,margin:"0 auto"}}>
        <div className="rv" style={{marginBottom:48}}>
          <p className="slabel">What's Coming</p>
          <h2 style={{fontFamily:"'Instrument Serif',serif",fontSize:"clamp(2rem,4vw,3rem)",fontWeight:400}}>Upcoming <em style={{color:"#2d6a4f"}}>Projects</em></h2>
          <p style={{color:"#7a7670",marginTop:7,fontSize:".9rem"}}>Click a card to read the full concept &amp; planned stack.</p>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(310px,1fr))",gap:20}}>
          {upcm.map((u,i)=>(
            <div key={u.name} className="card card-h rv" data-d={i*120} onClick={()=>setSel(u)} style={{padding:0,overflow:"hidden",cursor:"pointer"}}>
              <div style={{background:u.color,padding:"26px 24px 18px",display:"flex",alignItems:"center",gap:13}}>
                <div style={{width:44,height:44,borderRadius:12,background:"white",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"var(--sh)",flexShrink:0}}><u.C/></div>
                <div><div style={{fontSize:".68rem",fontWeight:700,letterSpacing:2,textTransform:"uppercase",color:u.accent,marginBottom:3}}>Coming Soon</div><div style={{fontFamily:"'Instrument Serif',serif",fontSize:".98rem",fontWeight:400,lineHeight:1.35}}>{u.name}</div></div>
              </div>
              <div style={{padding:"17px 24px 20px"}}>
                <p style={{fontSize:".83rem",color:"#7a7670",lineHeight:1.65,marginBottom:14}}>{u.desc.slice(0,120)}…</p>
                <div style={{height:3,background:"#f0ede8",borderRadius:2,marginBottom:5}}>
                  <div style={{height:"100%",width:`${u.pct}%`,background:u.accent,borderRadius:2}}/>
                </div>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                  <span style={{fontSize:".72rem",color:"#b0aca6"}}>Concept phase</span>
                  <span style={{fontSize:".72rem",color:u.accent,fontWeight:600}}>{u.pct}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <UpcModal u={sel} onClose={()=>setSel(null)}/>
    </section>
  );
}

export default Upcoming