import { useEffect, useRef } from 'react';

const HeroCanvasBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (!context) return;

    let animationFrameId: number;
    let scrollY = 0;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawFrame = () => {
      const progress = Math.min(scrollY / (window.innerHeight * 3), 1);

      context.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Gradient background glow
      const bgGradient = context.createRadialGradient(centerX, centerY, 0, centerX, centerY, canvas.width * 0.6);
      bgGradient.addColorStop(0, 'rgba(5, 150, 105, 0.08)');
      bgGradient.addColorStop(0.5, 'rgba(13, 148, 136, 0.04)');
      bgGradient.addColorStop(1, 'rgba(5, 150, 105, 0)');
      context.fillStyle = bgGradient;
      context.fillRect(0, 0, canvas.width, canvas.height);

      context.save();
      context.translate(centerX, centerY);

      const rotation = progress * Math.PI * 2;
      const scale = 0.5 + progress * 0.5;

      // Outer decorative circles
      for (let i = 0; i < 5; i++) {
        const radius = (100 + i * 80) * scale;
        const opacity = 0.25 - i * 0.04;

        context.save();
        context.rotate(rotation * (1 + i * 0.1));

        context.strokeStyle = `rgba(5, 150, 105, ${opacity})`;
        context.lineWidth = 2;
        context.setLineDash([10, 10]);
        context.beginPath();
        context.arc(0, 0, radius, 0, Math.PI * 2);
        context.stroke();
        context.setLineDash([]);

        context.restore();
      }

      // Inner solid rings
      for (let i = 0; i < 3; i++) {
        const radius = (60 + i * 50) * scale;
        const opacity = 0.5 - i * 0.1;

        context.strokeStyle = `rgba(13, 148, 136, ${opacity})`;
        context.lineWidth = 3;
        context.beginPath();
        context.arc(0, 0, radius, 0, Math.PI * 2);
        context.stroke();
      }

      // Rotating radiating lines
      context.save();
      context.rotate(rotation);
      context.strokeStyle = 'rgba(5, 150, 105, 0.3)';
      context.lineWidth = 2;

      for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 2;
        const length = 200 * scale;
        context.beginPath();
        context.moveTo(0, 0);
        context.lineTo(Math.cos(angle) * length, Math.sin(angle) * length);
        context.stroke();
      }
      context.restore();

      // Central glowing orb
      const orbRadius = 20 + progress * 10;
      const orbGradient = context.createRadialGradient(0, 0, 0, 0, 0, orbRadius);
      orbGradient.addColorStop(0, 'rgba(16, 185, 129, 0.8)');
      orbGradient.addColorStop(0.5, 'rgba(5, 150, 105, 0.5)');
      orbGradient.addColorStop(1, 'rgba(5, 150, 105, 0)');
      context.fillStyle = orbGradient;
      context.beginPath();
      context.arc(0, 0, orbRadius, 0, Math.PI * 2);
      context.fill();

      // Floating particles
      context.fillStyle = 'rgba(16, 185, 129, 0.4)';
      for (let i = 0; i < 20; i++) {
        const angle = (i / 20) * Math.PI * 2 + progress * Math.PI;
        const distance = 250 + Math.sin(progress * Math.PI * 2 + i) * 50;
        const x = Math.cos(angle) * distance * scale;
        const y = Math.sin(angle) * distance * scale;
        const size = 3 + Math.sin(progress * Math.PI * 4 + i) * 2;

        context.beginPath();
        context.arc(x, y, size, 0, Math.PI * 2);
        context.fill();
      }

      context.restore();

      // Corner decorative elements
      const cornerSize = 100 * scale;
      context.strokeStyle = 'rgba(13, 148, 136, 0.2)';
      context.lineWidth = 2;

      // Top left
      context.beginPath();
      context.arc(50, 50, cornerSize, 0, Math.PI / 2);
      context.stroke();

      // Top right
      context.beginPath();
      context.arc(canvas.width - 50, 50, cornerSize, Math.PI / 2, Math.PI);
      context.stroke();

      // Bottom left
      context.beginPath();
      context.arc(50, canvas.height - 50, cornerSize, Math.PI * 1.5, Math.PI * 2);
      context.stroke();

      // Bottom right
      context.beginPath();
      context.arc(canvas.width - 50, canvas.height - 50, cornerSize, Math.PI, Math.PI * 1.5);
      context.stroke();
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
      drawFrame();
    };

    const animate = () => {
      drawFrame();
      animationFrameId = requestAnimationFrame(animate);
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    window.addEventListener('scroll', handleScroll);
    animate();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
};

export default HeroCanvasBackground;
