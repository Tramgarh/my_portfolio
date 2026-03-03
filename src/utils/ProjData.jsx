import { IC } from "./IC"
import LP1 from '../assets/LP/LP_1.PNG'
import LP2 from '../assets/LP/LP_2.PNG'
import LP3 from '../assets/LP/LP_3.PNG'
import LP4 from '../assets/LP/LP_4.PNG'
import LP5 from '../assets/LP/LP_5.PNG'
import Saas1 from '../assets/SaaS/Screenshot (33).png'
import Saas2 from '../assets/SaaS/Screenshot (34).png'
import Saas3 from '../assets/SaaS/Screenshot (36).png'
import Saas4 from '../assets/SaaS/Screenshot (37).png'
import Saas5 from '../assets/SaaS/Screenshot (38).png'
import Saas6 from '../assets/SaaS/Screenshot (39).png'
import Saas7 from '../assets/SaaS/Screenshot (40).png'
import wkf_replier from '../assets/n8n_replier.PNG'
import wkf_LP from '../assets/LP_workflow.PNG'

export const readyProjects = [
    {
        id: 1,
        name: "SaaS Landing Page + Admin Dashboard",
        short: "Full SaaS with subscription tiers, role-based admin dashboard, and analytics.",
        desc: "Complete SaaS system: multi-page marketing site, subscription tiers, JWT-secured admin dashboard, user management, and analytics. Built for performance, easy to touch and clean analytics.",
        stack: ["React.js", "Node.js", "MongoDB", "Firebase", "Stripe", "JWT", "Tailwind"],
        C: IC.Lock,
        images: [
            Saas1,
            Saas2,
            Saas3,
            Saas4,
            Saas5,
            Saas6,
            Saas7
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
            LP1,
            LP2,
            LP3,
            LP4,
            LP5,
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
            wkf_replier,
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
            wkf_LP,
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