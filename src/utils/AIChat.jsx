import { useState, useEffect, useRef, useCallback } from "react";
import { IC } from "../utils/IC";


const CHIPS = [
  "What services do you offer?",
  "SaaS project cost?",
  "Tell me about your projects",
  "Your tech stack?",
  "I want to hire you",
  "AI automation pricing",
];

const OR_KEY   = "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";
const OR_MODEL = "meta-llama/llama-3-70b-instruct";

/* ─── PORTFOLIO KNOWLEDGE BASE ───────────────────────── */
const SYSTEM_PROMPT = `You are an AI assistant speaking on behalf of a Full Stack MERN & AI Automation Developer. Be professional, warm, and concise.

DEVELOPER PROFILE:
• 3+ years building production MERN applications, SaaS platforms, and AI workflows
• Passionate about clean architecture, scalable systems, and automation that actually works

SKILLS:
Frontend: React.js, Next.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Responsive Design
Backend: Node.js, Express.js, REST API (Advanced), API Architecture & Security, JWT Auth, WebSockets
Database: MongoDB, Mongoose schema design, Aggregation pipelines, Database indexing
Other: Python (ML basics – data cleaning, regression), Flutter & Dart (basic→intermediate), AI Workflow Automation, Lead Management Systems, Admin Dashboards, SaaS Landing Systems, E-commerce Business Logic

COMPLETED PROJECTS:
1. SaaS Landing Page + Admin Dashboard – Full SaaS platform with marketing landing, subscription tiers, role-based admin dashboard, user management, analytics. Stack: React, Node.js, MongoDB, Stripe, JWT, Tailwind CSS.
2. AI Auto Reply & Lead Management – AI-driven lead pipeline: auto-classifies messages, generates replies via OpenAI, scores leads, routes to CRM. Stack: Python, OpenAI API, Node.js, MongoDB, WebSockets.
3. Service Website + Backend Integration – High-converting service site with CMS, multi-step lead capture, email automation. Stack: React, Express, MongoDB, Nodemailer, Tailwind CSS.
4. Fast E-commerce System – Production e-commerce with smart inventory, dynamic pricing rules, abandoned cart recovery, optimized checkout. Stack: Next.js, Node.js, MongoDB, Redis, Stripe, AWS S3.

UPCOMING PROJECTS:
• AI Vision-Based E-commerce Camera System – visual search, virtual try-on, CV recommendations. Tech: Computer Vision, PyTorch, OpenCV, MERN Stack.
• Integrated Maps + Social + E-commerce Platform – geo-social commerce, local vendor discovery, real-time delivery tracking. Tech: Google Maps API, React Native, Node.js, MongoDB, Redis.

PRICING (USD estimates):
• Simple Landing Page: $200–$400
• Service Website + Backend: $800–$1,500
• SaaS Landing + Admin Dashboard: $2,000–$4,000
• Full E-commerce System: $2,500–$5,000
• AI Automation Workflow / Chatbot: $1,000–$2,500
• Full Custom MERN Application: $3,000–$8,000+
• AI Lead Management System: $1,500–$3,000
• Rush delivery: +30% premium | Free consultation always available

CONTACT: Email – developer@email.com | GitHub – github.com/developer | Response within 24 hours | Available worldwide for freelance, remote, full-time.

RULES: Be professional but warm. Give price ranges with scope caveat. If someone wants to hire, ask for their name, email, and project brief — confirm you've noted it and say the developer will follow up within 24h. Never invent skills/projects beyond what's listed. Use short paragraphs or bullets.`.trim();



const AIChat = () => {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState([
    { role:"assistant", text:"Hi! 👋 I'm the AI assistant for this developer. I know all about their skills, projects, and pricing. How can I help you?" }
  ]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [showChips, setShowChips] = useState(true);
  const endRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) { setTimeout(()=>endRef.current?.scrollIntoView({behavior:"smooth"}),80); inputRef.current?.focus(); }
  }, [open, msgs]);

  const ask = useCallback(async (text) => {
    const q = text.trim(); if (!q||busy) return;
    setShowChips(false);
    const history = [...msgs, {role:"user",text:q}];
    setMsgs(history);
    setInput("");
    setBusy(true);
    try {
      const apiMsgs = history.map(m=>({role:m.role,content:m.text}));
      const res = await fetch("https://openrouter.ai/api/v1/chat/completions",{
        method:"POST",
        headers:{"Authorization":`Bearer ${OR_KEY}`,"Content-Type":"application/json","HTTP-Referer":"https://portfolio.dev","X-Title":"Portfolio AI"},
        body:JSON.stringify({model:OR_MODEL,max_tokens:500,temperature:0.7,messages:[{role:"system",content:SYSTEM_PROMPT},...apiMsgs]}),
      });
      const data = await res.json();
      const reply = data.choices?.[0]?.message?.content || "Sorry, I couldn't respond. Please email: developer@email.com";
      setMsgs(prev=>[...prev,{role:"assistant",text:reply}]);
    } catch {
      setMsgs(prev=>[...prev,{role:"assistant",text:"I'm having trouble connecting right now. Please reach out directly at developer@email.com 📧"}]);
    }
    setBusy(false);
  },[msgs,busy]);

  const fmtText = (t) => {
    let s = t.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/\n/g,"<br/>");
    return s;
  };

  return (
    <>
      {open && (
        <div className="chat-win">
          {/* Header */}
          <div className="chdr">
            <div style={{width:34,height:34,borderRadius:10,background:"rgba(255,255,255,0.18)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
              <IC.Star/>
            </div>
            <div style={{flex:1}}>
              <div style={{color:"white",fontWeight:600,fontSize:".87rem",lineHeight:1}}>Portfolio Assistant</div>
              <div style={{color:"rgba(255,255,255,0.65)",fontSize:".71rem",marginTop:2,display:"flex",alignItems:"center",gap:5}}>
                <span style={{width:5,height:5,background:"#86efac",borderRadius:"50%",display:"inline-block"}}/>Llama-3 70b · Live
              </div>
            </div>
            <button onClick={()=>setOpen(false)} style={{background:"rgba(255,255,255,0.15)",border:"none",borderRadius:8,padding:"5px 9px",cursor:"pointer",color:"white",fontSize:".78rem",display:"flex",alignItems:"center",gap:4}}>
              <IC.X/>Close
            </button>
          </div>

          {/* Messages */}
          <div className="cmsgs">
            {msgs.map((m,i)=>(
              <div key={i} className={m.role==="user"?"muser":"mbot"}>
                {m.role==="assistant"&&(
                  <div style={{display:"flex",alignItems:"center",gap:5,marginBottom:5}}>
                    <div style={{width:16,height:16,borderRadius:4,background:"linear-gradient(135deg,#1a4a35,#2d6a4f)",display:"flex",alignItems:"center",justifyContent:"center"}}>
                      <svg viewBox="0 0 10 10" width="8" height="8" fill="none"><circle cx="5" cy="5" r="2.2" fill="white"/></svg>
                    </div>
                    <span style={{fontSize:".66rem",fontWeight:700,color:"#7a7670",letterSpacing:.4}}>AI ASSISTANT</span>
                  </div>
                )}
                <div dangerouslySetInnerHTML={{__html:fmtText(m.text)}} style={{wordBreak:"break-word"}}/>
              </div>
            ))}
            {busy&&(
              <div className="mbot">
                <div style={{display:"flex",alignItems:"center",gap:5,marginBottom:5}}>
                  <div style={{width:16,height:16,borderRadius:4,background:"linear-gradient(135deg,#1a4a35,#2d6a4f)",display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <svg viewBox="0 0 10 10" width="8" height="8" fill="none"><circle cx="5" cy="5" r="2.2" fill="white"/></svg>
                  </div>
                  <span style={{fontSize:".66rem",fontWeight:700,color:"#7a7670",letterSpacing:.4}}>AI ASSISTANT</span>
                </div>
                <div className="tdots"><span/><span/><span/></div>
              </div>
            )}
            <div ref={endRef}/>
          </div>

          {/* Quick chips */}
          {showChips&&(
            <div className="qchips">
              {CHIPS.map(c=><button key={c} className="qc" onClick={()=>ask(c)}>{c}</button>)}
            </div>
          )}

          {/* Input */}
          <div className="cinput-row">
            <textarea ref={inputRef} className="cinput" placeholder="Ask about skills, pricing, projects…" value={input}
              onChange={e=>setInput(e.target.value)}
              onKeyDown={e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();ask(input);}}}
              rows={1}
            />
            <button className="csend" onClick={()=>ask(input)} disabled={!input.trim()||busy}><IC.Send/></button>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button className="chat-btn" onClick={()=>setOpen(o=>!o)} title="Chat with AI Assistant">
        {open ? <IC.X/> : <IC.ChatIco/>}
        {!open&&<span className="badge">1</span>}
      </button>
    </>
  );
}

export default AIChat