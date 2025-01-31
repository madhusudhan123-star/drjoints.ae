import React, { useEffect, useRef } from 'react';
import Smoke from '@bijection/smoke';

const Smoketwo = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        var canvas = document.getElementById("canvas");
        var context = canvas.getContext("2d");
        canvas.width = 1500;
        canvas.height = 1000;
        var smoke = new Smoke(context, [80, 80, 80]); // context canvas, smoke color
        smoke.start();
        smoke.step(500);
        addSmoke(smoke);

        // Make run smoke run indefinitely
        function addSmoke() {
            smoke.addSmoke(400, 500, 2);
            smoke.addSmoke(600, 500, 3);
            setTimeout(() => {
                addSmoke();
            }, 1000);
        }

        // const canvas = canvasRef.current;
        // const ctx = canvas.getContext('2d');
        // canvas.width = 100; // Adjust canvas size as needed
        // canvas.height = 100;

        // // Initialize SmokeMachine with white color [255, 255, 255]
        // const party = SmokeMachine(ctx, [255, 255, 255]); // White smoke
        // party.start(); // Start animation

        // // Add continuous smoke at a fixed position
        // const smokeInterval = setInterval(() => {
        //     party.addSmoke(50, 50, 2); // Keep adding smoke at the same position
        // }, 50); // Adjust interval for flow density

        // // Cleanup on component unmount
        // return () => {
        //     clearInterval(smokeInterval);
        //     party.stop();
        // };
    }, []);

    return <canvas id="canvas" ref={canvasRef}></canvas>;
};

export default Smoketwo;
