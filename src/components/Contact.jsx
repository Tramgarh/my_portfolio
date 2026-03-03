import { useState } from "react";
import { IC } from "../utils/IC";

const Contact = () => {
  const [form, setForm] = useState({name:"",email:"",message:""});
  const [err, setErr] = useState({});
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);

  const validate = () => {
    const e={};
    if (!form.name.trim()) e.name="Name required";
    if (!/\S+@\S+\.\S+/.test(form.email)) e.email="Valid email required";
    if (form.message.trim().length<10) e.message="Message too short";
    return e;
  };
  const send = () => {
    const e=validate(); if (Object.keys(e).length){setErr(e);return;}
    setBusy(true); setTimeout(()=>{setBusy(false);setSent(true);},1500);
  };

  return (
    <section id="contact" style={{padding:"100px 24px"}}>
      <div style={{maxWidth:920,margin:"0 auto"}}>
        <div className="rv" style={{textAlign:"center",marginBottom:52}}>
          <p className="slabel">Get In Touch</p>
          <h2 style={{fontFamily:"'Instrument Serif',serif",fontSize:"clamp(2rem,4vw,3rem)",fontWeight:400}}>Let's work <em style={{color:"#2d6a4f"}}>together</em></h2>
          <p style={{color:"#7a7670",marginTop:9,maxWidth:400,margin:"9px auto 0",fontSize:".9rem"}}>Have a project? Drop a message — or chat with my AI assistant for an instant answer →</p>
        </div>
        <div className="cgrid" style={{display:"grid",gridTemplateColumns:"1fr 1.4fr",gap:32,alignItems:"start"}}>
          <div className="rvl">
            {[{C:IC.Mail,l:"Email",v:"tr.deepthinking@gmail.com",h:"mailto:tr.deepthinking@gmail.com",c:"#2d6a4f"},{C:IC.Github,l:"GitHub",v:"github.com/developer",h:"https://github.com",c:"#1a1916"},{C:IC.Wa,l:"WhatsApp",v:"+91 96495 25372",h:"https://wa.me/9649525372",c:"#25d366"}].map(it=>(
              <a key={it.l} href={it.h} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none",display:"block",marginBottom:11}}>
                <div className="card" style={{padding:"14px 18px",display:"flex",alignItems:"center",gap:12,transition:"all .2s",color:it.c}}
                  onMouseEnter={e=>e.currentTarget.style.transform="translateX(5px)"}
                  onMouseLeave={e=>e.currentTarget.style.transform="translateX(0)"}
                >
                  <div className="ibox" style={{color:it.c}}><it.C/></div>
                  <div><div style={{fontSize:".69rem",color:"#b0aca6",fontWeight:600,textTransform:"uppercase",letterSpacing:1}}>{it.l}</div><div style={{fontSize:".86rem",color:it.c,fontWeight:500}}>{it.v}</div></div>
                  <IC.Arr/>
                </div>
              </a>
            ))}
          </div>
          <div className="rvr">
            <div className="card" style={{padding:28}}>
              {sent ? (
                <div style={{textAlign:"center",padding:"28px 10px",animation:"scaleIn .3s ease"}}>
                  <div style={{width:50,height:50,borderRadius:"50%",background:"rgba(45,106,79,0.1)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 14px"}}><IC.Check/></div>
                  <h3 style={{fontFamily:"'Instrument Serif',serif",fontSize:"1.3rem",fontWeight:400,marginBottom:8}}>Message sent!</h3>
                  <p style={{color:"#7a7670",marginBottom:18,fontSize:".9rem"}}>I'll be in touch within 24 hours.</p>
                  <button className="btn btn-o" onClick={()=>{setSent(false);setForm({name:"",email:"",message:""});}}>Send another</button>
                </div>
              ) : (
                <div style={{display:"flex",flexDirection:"column",gap:14}}>
                  {[{k:"name",l:"Your name",t:"text",ph:"John Doe"},{k:"email",l:"Email",t:"email",ph:"john@example.com"}].map(f=>(
                    <div key={f.k}>
                      <label style={{fontSize:".78rem",fontWeight:600,color:"#7a7670",display:"block",marginBottom:5}}>{f.l}</label>
                      <input className="ff" type={f.t} placeholder={f.ph} value={form[f.k]} onChange={e=>{setForm(p=>({...p,[f.k]:e.target.value}));setErr(p=>({...p,[f.k]:""}));}} style={{borderColor:err[f.k]?"#dc2626":undefined}}/>
                      {err[f.k]&&<p style={{color:"#dc2626",fontSize:".73rem",marginTop:3}}>{err[f.k]}</p>}
                    </div>
                  ))}
                  <div>
                    <label style={{fontSize:".78rem",fontWeight:600,color:"#7a7670",display:"block",marginBottom:5}}>Message</label>
                    <textarea className="ff" placeholder="Tell me about your project…" rows={4} value={form.message} onChange={e=>{setForm(p=>({...p,message:e.target.value}));setErr(p=>({...p,message:""}));}} style={{resize:"vertical",borderColor:err.message?"#dc2626":undefined}}/>
                    {err.message&&<p style={{color:"#dc2626",fontSize:".73rem",marginTop:3}}>{err.message}</p>}
                  </div>
                  <button className="btn btn-d" onClick={send} style={{width:"100%",justifyContent:"center",padding:"12px"}}>
                    {busy?<span style={{display:"flex",alignItems:"center",gap:8}}><span style={{width:13,height:13,border:"2px solid rgba(255,255,255,0.3)",borderTopColor:"white",borderRadius:"50%",animation:"spin .7s linear infinite",display:"inline-block"}}/>Sending…</span>:"Send Message →"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact