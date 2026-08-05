import React, { useEffect, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if device supports touch only or coarse pointer
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHovered = false;
    let isClicking = false;
    let animId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      const target = e.target as HTMLElement | null;
      isHovered = !!target?.closest('button, a, input, textarea, select, [role="button"], .interactive-hover');
    };

    const handleMouseDown = () => { isClicking = true; };
    const handleMouseUp = () => { isClicking = false; };

    const updateCursor = () => {
      // Lerp ring position smooth trailing
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (dotRef.current) {
        const scale = isClicking ? 0.6 : isHovered ? 1.5 : 1;
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) scale(${scale})`;
      }

      if (ringRef.current) {
        const scale = isClicking ? 0.8 : isHovered ? 1.3 : 1;
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) scale(${scale})`;
        if (isHovered) {
          ringRef.current.style.borderColor = '#C8A45A';
          ringRef.current.style.backgroundColor = 'rgba(200, 164, 90, 0.1)';
        } else {
          ringRef.current.style.borderColor = 'rgba(200, 164, 90, 0.4)';
          ringRef.current.style.backgroundColor = 'transparent';
        }
      }

      animId = requestAnimationFrame(updateCursor);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });

    animId = requestAnimationFrame(updateCursor);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Precision Gold Center Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-[#C8A45A] rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_#C8A45A] will-change-transform"
        style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      />

      {/* Luxury Gold Ring Trailer */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-9 h-9 border border-[#C8A45A]/40 rounded-full -translate-x-1/2 -translate-y-1/2 transition-colors duration-200 will-change-transform"
        style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      />
    </div>
  );
};
