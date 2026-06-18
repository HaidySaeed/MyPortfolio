import { useEffect, useRef } from "react";

export default function GlowCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Track mouse position
    const mouse = { x: width / 2, y: height / 2, tx: width / 2, ty: height / 2 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.tx = e.clientX;
      mouse.ty = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Resize observer
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Orbs definitions for slow cosmic drift
    const orbs = [
      { x: width * 0.25, y: height * 0.3, radius: 180, vx: 0.3, vy: 0.2, color: "rgba(139, 92, 246, 0.08)" },
      { x: width * 0.75, y: height * 0.6, radius: 240, vx: -0.2, vy: 0.3, color: "rgba(59, 130, 246, 0.06)" },
      { x: width * 0.5, y: height * 0.8, radius: 200, vx: 0.15, vy: -0.25, color: "rgba(168, 85, 247, 0.05)" }
    ];

    const render = () => {
      // Clear with dark purple-blue background corresponding to #051424
      ctx.fillStyle = "#051424";
      ctx.fillRect(0, 0, width, height);

      // Draw subtle grid
      ctx.strokeStyle = "rgba(255, 255, 255, 0.015)";
      ctx.lineWidth = 1;
      const gridSize = 45;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Smooth mouse easing
      mouse.x += (mouse.tx - mouse.x) * 0.08;
      mouse.y += (mouse.ty - mouse.y) * 0.08;

      // Draw interactive mouse spotlight glow
      const mouseGlow = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        350
      );
      mouseGlow.addColorStop(0, "rgba(139, 92, 246, 0.04)");
      mouseGlow.addColorStop(0.5, "rgba(59, 130, 246, 0.015)");
      mouseGlow.addColorStop(1, "transparent");
      ctx.fillStyle = mouseGlow;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 350, 0, Math.PI * 2);
      ctx.fill();

      // Slow moving ambient blobs
      orbs.forEach((orb) => {
        orb.x += orb.vx;
        orb.y += orb.vy;

        // Bounce boundaries
        if (orb.x < -orb.radius || orb.x > width + orb.radius) orb.vx *= -1;
        if (orb.y < -orb.radius || orb.y > height + orb.radius) orb.vy *= -1;

        const radialGrad = ctx.createRadialGradient(
          orb.x,
          orb.y,
          0,
          orb.x,
          orb.y,
          orb.radius
        );
        radialGrad.addColorStop(0, orb.color);
        radialGrad.addColorStop(1, "transparent");

        ctx.fillStyle = radialGrad;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Ambient tiny glowing cyber-particles
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none"
    />
  );
}
