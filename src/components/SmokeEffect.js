import React, { useEffect, useRef } from 'react';

const SmokeEffect = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];
        const particleCount = 150; // Increased particle count

        class SmokeParticle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = canvas.height + 200;
                this.size = Math.random() * 200 + 100; // Increased size
                this.speedY = -Math.random() * 2 - 0.5; // Increased speed
                this.speedX = (Math.random() - 0.5) * 1;
                this.opacity = Math.random() * 0.6 + 0.2; // Increased opacity
                this.rotation = Math.random() * 360;
                this.rotationSpeed = (Math.random() - 0.5) * 2;
            }

            update() {
                this.y += this.speedY;
                this.x += this.speedX;
                this.rotation += this.rotationSpeed;
                this.size += 0.5; // Faster size increase
                this.opacity -= 0.002; // Slower fade out

                if (this.opacity <= 0 || this.y < -this.size) {
                    this.reset();
                }
            }

            draw() {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(this.rotation * Math.PI / 180);

                const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size / 2);
                gradient.addColorStop(0, `rgba(200, 220, 255, ${this.opacity})`); // Blueish white
                gradient.addColorStop(0.4, `rgba(180, 200, 255, ${this.opacity * 0.6})`);
                gradient.addColorStop(1, 'rgba(150, 180, 255, 0)');

                ctx.fillStyle = gradient;
                ctx.globalCompositeOperation = 'screen';

                ctx.beginPath();
                ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
                ctx.fill();

                ctx.restore();
            }
        }

        // Create initial particles with staggered spawning
        let particlesCreated = 0;
        const createParticles = () => {
            if (particlesCreated < particleCount) {
                particles.push(new SmokeParticle());
                particlesCreated++;
                setTimeout(createParticles, 50); // Stagger particle creation
            }
        };
        createParticles();

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });
            requestAnimationFrame(animate);
        }

        animate();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-10"
            style={{ background: 'transparent' }}
        />
    );
};

export default SmokeEffect;
