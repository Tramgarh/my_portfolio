import { IC } from "./IC"

export const readyProjects = [
    {
        id: 1,
        name: "SaaS Landing Page + Admin Dashboard",
        short: "Full SaaS with subscription tiers, role-based admin dashboard, and analytics.",
        desc: "Complete SaaS system: multi-page marketing site, subscription tiers, JWT-secured admin dashboard, user management, and analytics. Built for performance, easy to touch and clean analytics.",
        stack: ["React.js", "Node.js", "MongoDB", "Firebase", "Stripe", "JWT", "Tailwind"],
        C: IC.Lock,
        images: [
            "/src/assets/SaaS/Screenshot (33).png",
            "/src/assets/SaaS/Screenshot (34).png",
            "/src/assets/SaaS/Screenshot (36).png",
            "/src/assets/SaaS/Screenshot (37).png",
            "/src/assets/SaaS/Screenshot (38).png",
            "/src/assets/SaaS/Screenshot (39).png",
            "/src/assets/SaaS/Screenshot (40).png",
        ],
        color: "#e8f4f0",
        accent: "#2d6a4f",
        website: "https://replier-saas-iota.vercel.app/"
    },
    {
        id: 2,
        name: "Service Website + Backend Integration",
        short: "High-converting service site with CMS, lead capture, and email automation.",
        desc: "Service-oriented landing with dynamic CMS, multi-step lead capture, Nodemailer email automation, testimonial management, and SEO optimization.",
        stack: ["React.js", "Express.js", "MongoDB", "Nodemailer", "Tailwind"],
        images: [
            "/src/assets/LP/LP_1.PNG",
            "/src/assets/LP/LP_2.PNG",
            "/src/assets/LP/LP_3.PNG",
            "/src/assets/LP/LP_4.PNG",
            "/src/assets/LP/LP_5.PNG",
        ],
        C: IC.Monitor,
        color: "#fef4e8",
        accent: "#c47c1a",
        website: "https://service-saas-pink.vercel.app/"
    }
]

export const workflows = [
    {
        title: "Auto Reply Workflow",
        desc: "Message detection → AI classification → response generation → delivery → lead scoring → CRM update",
        C: IC.Cog,
        images: [
            "/src/assets/n8n_replier.PNG",
        ],
        steps: ["Incoming Msg", "AI clean", "Generate Reply", "Deliver", "Score", "CRM Sync"],
        color: "#f0ecf8",
        accent: "#6d4fc7"
    },
    {
        title: "Lead management",
        desc: "Message detection → classification → response generation → delivery → lead scoring → CRM update",
        C: IC.Cog,
        images: [
            "/src/assets/LP_workflow.PNG",
        ],
        steps: ["Incoming Msg", "Classify", "Generate Reply", "Deliver", "Score", "CRM Sync"],
        color: "#f0ecf8",
        accent: "#6d4fc7"
    },
]

export const upcomingProjects = [
    {
        name: "AI Vision-Based Camera System",
        tag: "Have a personal JARVIS.",
        desc: "Next-gen Jarvis powered by computer vision. Users open the camera of the mobile phone, having a virtually speech and agentic Jarvis system.",
        concept: "The system can detect, analyze, learn, catch, suggest, do tasks....",
        stack: ["Computer Vision", "PyTorch", "OpenCV", "MERN Stack", "TensorFlow.js"],
        C: IC.AI,
        color: "#f0ecf8",
        accent: "#6d4fc7",
        pct: 2
    },
    { 
        name: "Integrated Maps + Social + E-commerce Platform", 
        tag: "Local discovery meets social commerce.", 
        desc: "Geo-social commerce: merges local discovery, social feeds, and instant purchasing. Discover vendors on a map, follow their updates, read community reviews, order with real-time tracking.", 
        concept: "Location, social trust, and e-commerce in one platform — empowering local businesses to thrive digitally.", 
        stack: ["Map Box API", "React Js", "Node.js", "MongoDB", "Redis", "Socket.io"], 
        C: IC.Cart, 
        color: "#e8f4f0", 
        accent: "#2d6a4f", 
        pct: 20 
    },

]