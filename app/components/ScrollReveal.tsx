'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollRevealProps {
    children: ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
}

export default function ScrollReveal({ children, width = "100%", delay = 0.2, direction = "up" }: ScrollRevealProps) {
    const directions = {
        up: { y: 60, x: 0 },
        down: { y: -60, x: 0 },
        left: { x: 60, y: 0 },
        right: { x: -60, y: 0 },
    };

    return (
        <div style={{ position: "relative", width, overflow: "visible" }}>
            <motion.div
                initial={{ opacity: 0, ...directions[direction] }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                    duration: 1.2,
                    delay,
                    ease: [0.16, 1, 0.3, 1]
                }}
            >
                {children}
            </motion.div>
        </div>
    );
}
