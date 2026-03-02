import { useEffect, useRef } from 'react';
import './BackgroundHaze.css';

/**
 * BackgroundHaze Component
 * 
 * A minimal, premium animated background with soft gradient blobs
 * that react to scroll position. Optimized for performance.
 * 
 * Color Customization:
 * Modify the blob colors in the blobColors array below.
 * Use soft, muted colors with low opacity for best results.
 */

const BackgroundHaze = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const blobs = containerRef.current.querySelectorAll('.haze-blob');
    let scrollY = 0;
    let ticking = false;

    const updateBlobs = () => {
      const scrollProgress = Math.min(scrollY / (window.innerHeight * 2), 1);

      blobs.forEach((blob, index) => {
        const element = blob as HTMLElement;
        const speed = 0.3 + index * 0.15; // Different parallax speeds
        const translateY = scrollY * speed * 0.5;
        const opacity = 0.4 - scrollProgress * 0.15;
        const scale = 1 + scrollProgress * 0.2;

        element.style.transform = `translate(-50%, -50%) translateY(${translateY}px) scale(${scale})`;
        element.style.opacity = Math.max(0.2, opacity).toString();
      });

      ticking = false;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
      if (!ticking) {
        requestAnimationFrame(updateBlobs);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateBlobs();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Blob 1: Soft Violet */}
      <div
        className="haze-blob absolute top-[20%] left-[15%] w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(167, 139, 250, 0.8) 0%, rgba(167, 139, 250, 0) 70%)',
          filter: 'blur(80px)',
          transform: 'translate(-50%, -50%)',
          animation: 'float-slow 25s ease-in-out infinite',
        }}
      />

      {/* Blob 2: Soft Teal */}
      <div
        className="haze-blob absolute top-[40%] right-[20%] w-[700px] h-[700px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(94, 234, 212, 0.7) 0%, rgba(94, 234, 212, 0) 70%)',
          filter: 'blur(90px)',
          transform: 'translate(-50%, -50%)',
          animation: 'float-slow 30s ease-in-out infinite reverse',
        }}
      />

      {/* Blob 3: Warm Peach */}
      <div
        className="haze-blob absolute bottom-[25%] left-[25%] w-[550px] h-[550px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(251, 207, 232, 0.8) 0%, rgba(251, 207, 232, 0) 70%)',
          filter: 'blur(85px)',
          transform: 'translate(-50%, -50%)',
          animation: 'float-slow 28s ease-in-out infinite',
        }}
      />

      {/* Blob 4: Subtle Blue */}
      <div
        className="haze-blob absolute top-[60%] right-[15%] w-[650px] h-[650px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(147, 197, 253, 0.7) 0%, rgba(147, 197, 253, 0) 70%)',
          filter: 'blur(95px)',
          transform: 'translate(-50%, -50%)',
          animation: 'float-slow 32s ease-in-out infinite reverse',
        }}
      />

      {/* Overlay gradient for depth */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(255, 255, 255, 0.3) 100%)',
          mixBlendMode: 'overlay',
        }}
      />
    </div>
  );
};

export default BackgroundHaze;
