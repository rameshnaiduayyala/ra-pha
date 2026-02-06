import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const ChromaGrid = ({
  items = [],
  className = "",
  radius = 300,
  damping = 0.45,
  fadeOut = 0.6,
  ease = "power3.out",
}) => {
  const rootRef = useRef(null);
  const fadeRef = useRef(null);
  const setX = useRef(null);
  const setY = useRef(null);
  const pos = useRef({ x: 0, y: 0 });

  // Initial spotlight setup
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    setX.current = gsap.quickSetter(el, "--x", "px");
    setY.current = gsap.quickSetter(el, "--y", "px");

    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  // Spotlight motion follow
  const moveTo = (x, y) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true,
    });
  };

  const handleMove = (e) => {
    const r = rootRef.current.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleLeave = () => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
      overwrite: true,
    });
  };

  const handleCardMove = (e) => {
    const c = e.currentTarget;
    const rect = c.getBoundingClientRect();
    c.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    c.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  // Floating animation for each card
  useEffect(() => {
    gsap.utils.toArray(".floating-card").forEach((card, i) => {
      gsap.to(card, {
        y: "+=10",
        rotation: "+=0.5",
        duration: 4 + Math.random() * 2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        delay: i * 0.3,
      });
    });
  }, []);

  return (
    <div
      ref={rootRef}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={`relative w-full flex flex-wrap justify-center items-center gap-12 md:gap-10 ${className}`}
      style={{
        "--r": `${radius}px`,
        "--x": "50%",
        "--y": "50%",
      }}
    >
      {items.map((c, i) => (
        <article
          key={i}
          onMouseMove={handleCardMove}
          className="floating-card group relative flex flex-col w-[290px] min-h-[380px] rounded-3xl overflow-hidden border border-white/20 backdrop-blur-xl cursor-default 
          transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/40"
          style={{
            background: "rgba(255,255,255,0.08)",
          }}
        >
          {/* Subtle spotlight hover */}
          <div
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background:
                "radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.25), transparent 60%)",
            }}
          />

          {/* Image */}
          <div className="relative flex-1 flex items-center justify-center pt-6">
            <img
              src={c.image}
              alt={c.title}
              loading="lazy"
              className="w-36 h-36 object-cover rounded-full border border-cyan-300/40 shadow-md"
            />
          </div>

          {/* Text */}
          <footer className="relative z-10 px-6 pb-8 text-center text-white font-sans">
            <h3 className="text-lg font-semibold tracking-tight mb-1">
              {c.title}
            </h3>
            <p className="text-sm text-cyan-300 mb-2">{c.subtitle}</p>
            {c.desc && (
              <p className="text-[0.85rem] text-slate-200/90 leading-relaxed">
                {c.desc}
              </p>
            )}
          </footer>
        </article>
      ))}

      {/* Clean spotlight mask */}
      <div
        className="absolute inset-0 pointer-events-none z-30"
        style={{
          background: "transparent",
          maskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y), transparent 0%, rgba(0,0,0,0.1) 70%, black 100%)",
          WebkitMaskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y), transparent 0%, rgba(0,0,0,0.1) 70%, black 100%)",
        }}
      />

      {/* Fade smoothing */}
      <div
        ref={fadeRef}
        className="absolute inset-0 pointer-events-none z-40 transition-opacity duration-[250ms]"
        style={{
          background: "transparent",
          maskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y), white 0%, rgba(255,255,255,0.8) 70%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y), white 0%, rgba(255,255,255,0.8) 70%, transparent 100%)",
          opacity: 1,
        }}
      />
    </div>
  );
};

export default ChromaGrid;
