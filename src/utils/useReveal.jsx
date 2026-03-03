import { useEffect } from "react";

const useReveal = () => {
  useEffect(() => {
    const io = new IntersectionObserver(
      es => es.forEach(e => { if (e.isIntersecting) setTimeout(() => e.target.classList.add("on"), +(e.target.dataset.d||0)); }),
      { threshold: 0.08 }
    );
    document.querySelectorAll(".rv,.rvl,.rvr").forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default useReveal