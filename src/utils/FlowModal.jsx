import { IC } from "../utils/IC";
import { useState } from "react";

const FlowModal = ({ f, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  
  if (!f) return null;

  const hasImages = f.images && f.images.length > 0;

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % f.images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + f.images.length) % f.images.length);
  };

  const openImageInNewTab = (e) => {
    e.stopPropagation();
    if (hasImages) {
      window.open(f.images[currentImageIndex], '_blank');
    }
  };

  return (
    <div className="mbg" onClick={onClose}>
      <div className="mbox" style={{ maxWidth: 500, width: "100%" }} onClick={e => e.stopPropagation()}>
        <div style={{ background: f.color, borderRadius: "20px 20px 0 0", padding: "28px 26px 20px", position: "relative" }}>
          <div className="ibox" style={{ width: 44, height: 44, borderRadius: 12, background: "white", marginBottom: 11 }}>
            <f.C />
          </div>
          <h3 style={{ fontFamily: "'Instrument Serif',serif", fontSize: "1.35rem", fontWeight: 400 }}>{f.title}</h3>
          <button 
            onClick={onClose} 
            style={{ 
              position: "absolute", 
              top: 16, 
              right: 16, 
              background: "rgba(0,0,0,0.08)", 
              border: "none", 
              borderRadius: "50%", 
              width: 28, 
              height: 28, 
              cursor: "pointer", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center" 
            }}
          >
            <IC.X />
          </button>
        </div>
        
        <div style={{ padding: "22px 26px 26px" }}>
          {/* Image Slides Section with Hover Preview */}
          {hasImages ? (
            <div 
              style={{ 
                marginBottom: 20,
                borderRadius: 12,
                overflow: "hidden",
                position: "relative",
                border: "1px solid rgba(0,0,0,0.05)",
                background: `linear-gradient(135deg, ${f.color}, white)`,
                height: 160
              }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div style={{ width: "100%", height: "100%", position: "relative" }}>
                <img 
                  src={f.images[currentImageIndex]} 
                  alt={`${f.title} screenshot ${currentImageIndex + 1}`}
                  style={{ 
                    width: "100%", 
                    height: "100%", 
                    objectFit: "cover",
                    display: "block"
                  }}
                />
                
                {/* Hover Preview Button */}
                {isHovering && (
                  <button
                    onClick={openImageInNewTab}
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      background: "rgba(0,0,0,0.7)",
                      border: "none",
                      borderRadius: "30px",
                      padding: "8px 16px",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      cursor: "pointer",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                      zIndex: 10,
                      color: "white",
                      fontSize: ".8rem",
                      fontWeight: 500,
                      backdropFilter: "blur(4px)",
                      transition: "all 0.2s ease"
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Preview
                  </button>
                )}
                
                {/* Navigation arrows - only show if more than one image */}
                {f.images.length > 1 && (
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
                        width: 30,
                        height: 30,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                        zIndex: 2,
                        fontSize: "16px",
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
                        width: 30,
                        height: 30,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                        zIndex: 2,
                        fontSize: "16px",
                        fontWeight: "bold",
                        color: "#333"
                      }}
                    >
                      →
                    </button>
                  </>
                )}
                
                {/* Image counter */}
                {f.images.length > 1 && (
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
                    {currentImageIndex + 1} / {f.images.length}
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* Fallback gradient when no images */
            <div style={{ 
              height: 120, 
              borderRadius: 12, 
              background: `linear-gradient(135deg, ${f.color}, white)`, 
              border: "1px solid rgba(0,0,0,0.05)", 
              marginBottom: 20, 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center" 
            }}>
              <div style={{ 
                width: 48, 
                height: 48, 
                borderRadius: 14, 
                background: "white", 
                boxShadow: "var(--sh2)", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                fontSize: "20px"
              }}>
                <f.C />
              </div>
            </div>
          )}
          
          <p style={{ color: "#7a7670", lineHeight: 1.75, marginBottom: 20 }}>{f.desc}</p>
          
          {/* Steps Section */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 4, alignItems: "center" }}>
            {f.steps && f.steps.map((s, i) => (
              <div key={s} style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <div style={{ 
                  background: f.color, 
                  border: `1.5px solid ${f.accent}20`, 
                  borderRadius: 8, 
                  padding: "6px 12px", 
                  fontSize: ".79rem", 
                  fontWeight: 600, 
                  color: f.accent 
                }}>
                  {s}
                </div>
                {i < f.steps.length - 1 && (
                  <span style={{ color: f.accent, fontSize: "1rem" }}>→</span>
                )}
              </div>
            ))}
          </div>
          
          <button className="btn btn-d" style={{ width: "100%", justifyContent: "center", marginTop: 22 }} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlowModal;