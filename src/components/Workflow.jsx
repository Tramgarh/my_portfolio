import { useState} from "react";
import FlowModal from "../utils/FlowModal";
import { IC } from "../utils/IC";
import { workflows } from "../utils/ProjData";

// const flows = [
//   {title:"Auto Reply Workflow",desc:"Message detection → AI classification → response generation → delivery → lead scoring → CRM update",C:IC.Cog,steps:["Incoming Msg","AI Classify","Generate Reply","Deliver","Score","CRM Sync"],color:"#f0ecf8",accent:"#6d4fc7"},
//   {title:"Lead Automation Flow",desc:"Lead capture → validation → data enrichment → segmentation → nurture sequence → conversion tracking",C:IC.AI,steps:["Capture","Validate","Enrich","Segment","Nurture","Convert"],color:"#e8f4f0",accent:"#2d6a4f"},
// ];

const flows = workflows

const Workflow = () => {
  const [sel, setSel] = useState(null);
  return (
    <section style={{padding:"80px 24px"}}>
      <div style={{maxWidth:1100,margin:"0 auto"}}>
        <div className="rv" style={{marginBottom:44}}>
          <p className="slabel">Workflow Systems</p>
          <h2 style={{fontFamily:"'Instrument Serif',serif",fontSize:"clamp(1.8rem,3.5vw,2.5rem)",fontWeight:400}}>Automation <em style={{color:"#2d6a4f"}}>Diagrams</em></h2>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:18}}>
          {flows.map((f,i)=>(
            <div key={f.title} className="card card-h rv" data-d={i*110} onClick={()=>setSel(f)} style={{padding:26,cursor:"pointer"}}>
              <div style={{width:44,height:44,borderRadius:11,background:f.color,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:13,border:`1px solid ${f.accent}15`}}><f.C/></div>
              <h3 style={{fontFamily:"'Instrument Serif',serif",fontSize:"1.05rem",fontWeight:400,marginBottom:7}}>{f.title}</h3>
              <p style={{fontSize:".82rem",color:"#7a7670",lineHeight:1.65,marginBottom:14}}>{f.desc}</p>
              <div style={{display:"flex",alignItems:"center",gap:5,fontSize:".79rem",color:f.accent,fontWeight:600}}>View diagram <IC.Arr/></div>
            </div>
          ))}
        </div>
      </div>
      <FlowModal f={sel} onClose={()=>setSel(null)}/>
    </section>
  );
}

export default Workflow