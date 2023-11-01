import React, { FC, useEffect, useRef } from 'react';
import styles from './TwinklingStars.module.css';

interface TwinklingStarsProps {}

const TwinklingStars: FC<TwinklingStarsProps> = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d') as CanvasRenderingContext2D

    if (!canvas || !ctx) {
      console.error('Canvas or 2D context not available');
      return;
    }

    function randomInt(max: number) {
      return Math.floor(Math.random() * max);
    }

    function createStars(width: number, height: number, spacing: number) {
      const stars = [];

      for (let x = 0; x < width; x += spacing) {
    
        for (let y = 0; y < height; y += spacing) {
          const star = {
            x: x + randomInt(spacing),
            y: y + randomInt(spacing),
            r: Math.random() * maxStarRadius,
          };
          stars.push(star);
        }
      }
      return stars;
    }

    function fillCircle(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, fillStyle: string) {
      ctx.beginPath();
      ctx.fillStyle = fillStyle;
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    function getOpacity(factor: number) {
      const opacityIncrement = (maxStarOpacity - minStarOpacity) * Math.abs(Math.sin(factor));
      const opacity = minStarOpacity + opacityIncrement;
      return opacity;
    }

    function render() {
      const gradient = ctx.createRadialGradient(
        width / 2, height / 2, 0,
        width / 2, height / 2, Math.max(width, height) / 2
      );
      gradient.addColorStop(0, backgroundColor);
      gradient.addColorStop(1, 'black');
      ctx.fillStyle = gradient;

      ctx.fillRect(0, 0, width, height);
      stars.forEach(function (star, i) {
        const factor = counter * i;
        const x = star.x;
        const y = star.y;
        const opacity = getOpacity(factor);
        fillCircle(ctx, x, y, star.r, `rgba(255, 255, 255, ${opacity})`);
      });

      counter++;
      requestAnimationFrame(render);
    }

    const backgroundColor = "black";
    const width = window.innerWidth;
    const height = 4000;
    const maxStarRadius = 1.5;
    const minStarOpacity = 0.1;
    const maxStarOpacity = 0.7;
    const stars = createStars(width, height, 60);

    canvas.width = width;
    canvas.height = 4000;

    let counter = 0;

    requestAnimationFrame(render);
  }, []);

  return (
    <canvas ref={canvasRef} id="canvas" className={styles.TwinklingStars} data-testid="TwinklingStars"></canvas>
  );
};

export default TwinklingStars;
