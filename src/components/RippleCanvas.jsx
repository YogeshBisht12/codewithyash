import { useEffect, useRef } from "react";

export default function RippleCanvas() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        resizeCanvas();

        let ripples = [];

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ripples.forEach((ripple, index) => {
                ctx.beginPath();
                ctx.arc(ripple.x, ripple.y, ripple.radius, 0, 2 * Math.PI);

                const gradient = ctx.createRadialGradient(
                    ripple.x,
                    ripple.y,
                    ripple.radius * 0.2,
                    ripple.x,
                    ripple.y,
                    ripple.radius
                );
                gradient.addColorStop(0, `rgba(255, 255, 255, ${ripple.alpha})`); // Pure white center
                gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);             // Fade out

                ctx.strokeStyle = gradient;
                ctx.shadowBlur = 25;
                ctx.shadowColor = `rgba(255, 255, 255, ${ripple.alpha})`;
                ctx.lineWidth = 2;
                ctx.stroke();

                ripple.radius += 2;
                ripple.alpha -= 0.02;

                if (ripple.alpha <= 0) ripples.splice(index, 1);
            });

            requestAnimationFrame(draw);
        };

        const addRipple = (e) => {
            const rect = canvas.getBoundingClientRect();
            ripples.push({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
                radius: 0,
                alpha: 0.7
            });
        };

        canvas.addEventListener("mousemove", addRipple);
        window.addEventListener("resize", resizeCanvas);
        draw();

        return () => {
            canvas.removeEventListener("mousemove", addRipple);
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
        />
    );
}
