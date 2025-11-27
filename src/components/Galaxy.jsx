import React, { useEffect, useRef } from "react";
import "./Galaxy.css";

function Galaxy() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const stars = [];
    const shootingStars = [];

    const STAR_COUNT = 220;

    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.8 + 0.4,
        speed: Math.random() * 0.3 + 0.1,
        glow: Math.random() * 15 + 5,
      });
    }

    function createShootingStar() {
      shootingStars.push({
        x: Math.random() * w,
        y: 0,
        length: Math.random() * 40 + 30,
        speed: Math.random() * 8 + 5,
        opacity: 1,
      });
    }

    function drawStars() {
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);

        ctx.fillStyle = "rgba(200,130,255,0.9)";
        ctx.shadowBlur = star.glow;
        ctx.shadowColor = "rgba(200,100,255,1)";
        ctx.fill();

        star.y += star.speed;
        if (star.y > h) star.y = 0;
      });
    }

    function drawShootingStars() {
      shootingStars.forEach((star, i) => {
        ctx.strokeStyle = `rgba(255,255,255,${star.opacity})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(star.x - star.length, star.y + star.length);
        ctx.stroke();

        star.x += star.speed;
        star.y += star.speed;
        star.opacity -= 0.02;

        if (star.opacity <= 0) shootingStars.splice(i, 1);
      });
    }

    function drawNebula() {
      const gradient = ctx.createRadialGradient(
        w * 0.5,
        h * 0.6,
        50,
        w * 0.5,
        h * 0.6,
        500
      );
      gradient.addColorStop(0, "rgba(130, 0, 255, 0.3)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);
    }

    function animate() {
      ctx.clearRect(0, 0, w, h);
      drawNebula();
      drawStars();
      drawShootingStars();

      if (Math.random() < 0.01) createShootingStar(); // random chance

      requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener("resize", () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    });
  }, []);

  return <canvas ref={canvasRef} className="galaxy-canvas"></canvas>;
}

export default Galaxy;
