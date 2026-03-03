import About from "./components/About";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Workflow from "./components/Workflow";
import Projects from "./components/Projects";
import Upcoming from "./components/Upcoming";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer"
import useReveal from "./utils/useReveal";
import AIChat from "./utils/AIChat";

export default function App() {
  useReveal();
  return (
    <>
      {/* <Styles/> */}
      {/* Left floating AI dot */}
      {/* <div className="ai-left" title="AI-Powered Portfolio">
        <svg viewBox="0 0 18 18" width="16" height="16" fill="none"><circle cx="9" cy="9" r="2.8" stroke="#2d6a4f" strokeWidth="1.4"/><path d="M9 1v2M9 15v2M1 9h2M15 9h2M3 3l1.4 1.4M13.6 13.6l1.4 1.4M13.6 3l-1.4 1.4M3 13.6l1.4 1.4" stroke="#2d6a4f" strokeWidth="1.4" strokeLinecap="round"/></svg>
      </div> */}
      <Nav/>
      <main>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Workflow />
        <Upcoming/>
        <Contact/>
      </main>
      <Footer/>
      <AIChat/>
    </>
  );
}