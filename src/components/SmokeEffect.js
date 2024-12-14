import React from 'react';
import { Suspense, useMemo } from "react";
import { Canvas } from '@react-three/fiber';
import { CustomSmoke } from './CustomSmoke';

const SmokeCanvas = React.memo(() => {
    return (
        <Canvas
            camera={{ position: [0, 0, 10], fov: 75 }}
            style={{
                background: 'transparent',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'
            }}
            gl={{
                alpha: true,
                antialias: true,
                powerPreference: "high-performance"
            }}
        >
            <Suspense fallback={null}>
                <CustomSmoke />
            </Suspense>
        </Canvas>
    );
});

export default SmokeCanvas;