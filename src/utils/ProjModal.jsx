import { IC } from "../utils/IC";
import { useState } from "react";

const ProjModal = ({ p, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  if (!p) return null;

  const hasImages = p.images && p.images.length > 0;
  const hasWebsite = p.website || p.url || p.link;

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % p.images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + p.images.length) % p.images.length);
  };

  const openWebsite = (e) => {
    e.stopPropagation();
    const url = p.website || p.url || p.link;
    if (url) {
      window.open(url, '_blank');
    }
  };

  // Safe icon rendering with fallbacks
  const renderIcon = (iconName) => {
    try {
      const Icon = IC[iconName];
      return Icon ? <Icon /> : null;
    } catch (error) {
      console.warn(`Icon ${iconName} not found`);
      return null;
    }
  };

  return (
    <div className="mbg" onClick={onClose}>
      <div className="mbox" style={{ maxWidth: 560, width: "100%" }} onClick={e => e.stopPropagation()}>
        <div style={{ background: p.color, borderRadius: "20px 20px 0 0", padding: "30px 28px 22px", position: "relative" }}>
          <div className="ibox" style={{ width: 46, height: 46, borderRadius: 13, background: "white", boxShadow: "var(--sh)", marginBottom: 12 }}>
            {p.C ? <p.C /> : renderIcon('Default') || '🔷'}
          </div>
          <div style={{ fontSize: ".7rem", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: p.accent, marginBottom: 5 }}>
            Project #{p.id}
          </div>
          <h3 style={{ fontFamily: "'Instrument Serif',serif", fontSize: "1.4rem", fontWeight: 400, lineHeight: 1.3, color: "#1a1916" }}>
            {p.name}
          </h3>
          <button 
            onClick={onClose} 
            style={{ 
              position: "absolute", 
              top: 16, 
              right: 16, 
              background: "rgba(0,0,0,0.08)", 
              border: "none", 
              borderRadius: "50%", 
              width: 30, 
              height: 30, 
              cursor: "pointer", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              color: "#5a5752" 
            }}
          >
            {renderIcon('X') || '✕'}
          </button>
        </div>
        
        <div style={{ padding: "24px 28px 28px" }}>
          {/* Conditional rendering: Show images if available, otherwise show icon */}
          {hasImages ? (
            <div style={{ 
              height: 180, 
              borderRadius: 12, 
              marginBottom: 20, 
              position: "relative",
              overflow: "hidden",
              background: `linear-gradient(135deg, ${p.color}, white)`,
              border: "1px solid rgba(0,0,0,0.05)"
            }}>
              {/* Image slides */}
              <div style={{ 
                width: "100%", 
                height: "100%", 
                position: "relative"
              }}>
                <img 
                  src={p.images[currentImageIndex]} 
                  alt={`${p.name} screenshot ${currentImageIndex + 1}`}
                  style={{ 
                    width: "100%", 
                    height: "100%", 
                    objectFit: "cover",
                    display: "block"
                  }}
                />
                
                {/* Navigation arrows - only show if more than one image */}
                {p.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      style={{
                        position: "absolute",
                        left: 8,
                        top: "50%",
                        transform: "translateY(-50%)",
                        background: "rgba(255,255,255,0.8)",
                        border: "none",
                        borderRadius: "50%",
                        width: 32,
                        height: 32,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                        zIndex: 2,
                        fontSize: "18px",
                        fontWeight: "bold",
                        color: "#333"
                      }}
                    >
                      ←
                    </button>
                    <button
                      onClick={nextImage}
                      style={{
                        position: "absolute",
                        right: 8,
                        top: "50%",
                        transform: "translateY(-50%)",
                        background: "rgba(255,255,255,0.8)",
                        border: "none",
                        borderRadius: "50%",
                        width: 32,
                        height: 32,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                        zIndex: 2,
                        fontSize: "18px",
                        fontWeight: "bold",
                        color: "#333"
                      }}
                    >
                      →
                    </button>
                  </>
                )}
                
                {/* Image counter */}
                {p.images.length > 1 && (
                  <div style={{
                    position: "absolute",
                    bottom: 8,
                    right: 8,
                    background: "rgba(0,0,0,0.6)",
                    color: "white",
                    padding: "2px 8px",
                    borderRadius: 12,
                    fontSize: ".7rem",
                    fontWeight: 500,
                    zIndex: 2
                  }}>
                    {currentImageIndex + 1} / {p.images.length}
                  </div>
                )}
              </div>
            </div>
          ) : (
            // Fallback icon when no images
            <div style={{ 
              height: 130, 
              borderRadius: 12, 
              background: `linear-gradient(135deg, ${p.color}, white)`, 
              border: "1px solid rgba(0,0,0,0.05)", 
              marginBottom: 20, 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center" 
            }}>
              <div style={{ 
                width: 54, 
                height: 54, 
                borderRadius: 16, 
                background: "white", 
                boxShadow: "var(--sh2)", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                fontSize: "24px"
              }}>
                {p.C ? <p.C /> : '📁'}
              </div>
            </div>
          )}
          
          <p style={{ color: "#5a5752", lineHeight: 1.8, marginBottom: 20, fontSize: ".95rem" }}>
            {p.desc}
          </p>
          
          <div style={{ marginBottom: 22 }}>
            <div style={{ fontSize: ".7rem", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#b0aca6", marginBottom: 9 }}>
              Tech Stack
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
              {p.stack && p.stack.map(s => (
                <span key={s} style={{ background: p.color, border: `1px solid ${p.accent}22`, borderRadius: 7, padding: "4px 11px", fontSize: ".79rem", color: p.accent, fontWeight: 500 }}>
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Website/Project Link Button */}
          {hasWebsite && (
            <button 
              onClick={openWebsite}
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "10px",
                background: p.accent || p.color,
                color: "white",
                border: "none",
                borderRadius: "10px",
                fontSize: ".9rem",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                cursor: "pointer",
                transition: "opacity 0.2s ease",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
              }}
              onMouseEnter={(e) => e.target.style.opacity = "0.9"}
              onMouseLeave={(e) => e.target.style.opacity = "1"}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              Visit Live Project
            </button>
          )}
          
          <button className="btn btn-d" style={{ width: "100%", justifyContent: "center" }} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjModal;