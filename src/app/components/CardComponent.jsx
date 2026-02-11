"use client";
import { useRef, useEffect } from "react";

export default function SpotlightCard({ children, className = "" }) {
  const ref = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const smooth = useRef({ x: 0, y: 0 });
  const hovering = useRef(false);

  useEffect(() => {
    let frame;

    const animate = () => {
      if (hovering.current) {
        // smooth follow ONLY when hovering
        smooth.current.x += (mouse.current.x - smooth.current.x) * 0.08;
        smooth.current.y += (mouse.current.y - smooth.current.y) * 0.08;

        if (ref.current) {
          ref.current.style.setProperty("--x", `${smooth.current.x}px`);
          ref.current.style.setProperty("--y", `${smooth.current.y}px`);
        }
      }

      frame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  const handleMouseMove = (e) => {
    hovering.current = true;

    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    mouse.current.x = e.clientX - rect.left;
    mouse.current.y = e.clientY - rect.top;
  };

  const handleMouseLeave = () => {
    hovering.current = false;
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden rounded-2xl ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 spotlight-bg opacity-0 group-hover:opacity-100" />

      {children}
    </div>
  );
}
