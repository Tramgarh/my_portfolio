import { IC } from "../utils/IC";

const UpcModal = ({u,onClose}) => {
  if (!u) return null;
  return (
    <div className="mbg" onClick={onClose}>
      <div className="mbox hmod" style={{maxWidth:740,width:"100%"}} onClick={e=>e.stopPropagation()}>
        <div style={{background:u.color,borderRadius:"20px 0 0 20px",padding:"38px 32px",display:"flex",flexDirection:"column",justifyContent:"center",gap:16,minHeight:400}}>
          <div style={{width:52,height:52,borderRadius:15,background:"white",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"var(--sh2)"}}><u.C/></div>
          <h3 style={{fontFamily:"'Instrument Serif',serif",fontSize:"1.3rem",fontWeight:400,lineHeight:1.3,color:"#1a1916"}}>{u.name}</h3>
          <div style={{fontSize:".92rem",fontStyle:"italic",color:u.accent,fontFamily:"'Instrument Serif',serif"}}>"{u.tag}"</div>
          <div>
            <div style={{display:"flex",justifyContent:"space-between",marginBottom:5}}>
              <span style={{fontSize:".73rem",color:"#7a7670"}}>Concept phase</span>
              <span style={{fontSize:".73rem",fontWeight:700,color:u.accent}}>{u.pct}%</span>
            </div>
            <div style={{height:4,background:"rgba(0,0,0,0.08)",borderRadius:2}}>
              <div style={{height:"100%",width:`${u.pct}%`,background:u.accent,borderRadius:2}}/>
            </div>
          </div>
        </div>
        <div style={{padding:"34px 28px",position:"relative"}}>
          <button onClick={onClose} style={{position:"absolute",top:14,right:14,background:"#f0ede8",border:"none",borderRadius:"50%",width:28,height:28,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}><IC.X/></button>
          <div style={{fontSize:".7rem",fontWeight:700,letterSpacing:2,textTransform:"uppercase",color:"#b0aca6",marginBottom:5}}>Upcoming Project</div>
          <p style={{color:"#5a5752",lineHeight:1.8,marginBottom:13,fontSize:".92rem"}}>{u.desc}</p>
          <p style={{color:"#9a9690",lineHeight:1.75,marginBottom:20,fontSize:".87rem",borderLeft:"2px solid #e0dcd6",paddingLeft:13}}>{u.concept}</p>
          <div style={{fontSize:".7rem",fontWeight:700,letterSpacing:2,textTransform:"uppercase",color:"#b0aca6",marginBottom:9}}>Planned Stack</div>
          <div style={{display:"flex",flexWrap:"wrap",gap:7,marginBottom:22}}>
            {u.stack.map(s=><span key={s} style={{background:u.color,border:`1px solid ${u.accent}20`,borderRadius:7,padding:"4px 11px",fontSize:".78rem",color:u.accent,fontWeight:500}}>{s}</span>)}
          </div>
          <button className="btn btn-d" style={{width:"100%",justifyContent:"center"}} onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default UpcModal