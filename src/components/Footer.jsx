import { IC } from "../utils/IC";


const Footer = () => {
  return (
    <footer style={{borderTop:"1px solid rgba(0,0,0,0.06)",padding:"26px 24px",background:"white"}}>
      <div style={{maxWidth:1100,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"center",gap:14,position:"relative",flexWrap:"wrap"}}>
        {[{C:IC.Github,h:"https://github.com"},{C:IC.Mail,h:"mailto:tr.deepthinking@gmail.com"},{C:IC.Wa,h:"https://wa.me/9649525372"}].map((l,i)=>(
          <a key={i} href={l.h} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none",color:"#5a5752"}}>
            <div style={{width:36,height:36,borderRadius:9,background:"#f8f7f4",border:"1px solid rgba(0,0,0,0.07)",display:"flex",alignItems:"center",justifyContent:"center",transition:"all .2s",boxShadow:"var(--sh)"}}
              onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.boxShadow="var(--sh2)";}}
              onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="var(--sh)";}}
            ><l.C/></div>
          </a>
        ))}
        <div style={{position:"absolute",right:0,display:"flex",alignItems:"center",gap:7}}>
          <div style={{width:57,height:27,borderRadius:"20%",background:"linear-gradient(135deg,#2d6a4f,#1a4a35)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:".68rem",color:"white",fontWeight:700}}>ThinkX</div>
          <span style={{fontSize:".75rem",color:"#b0aca6"}}>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer