"use client";
import React from 'react'
import {motion} from 'framer-motion';

export default function Textt() {
    return (
        <motion.h3 initial={{x: -1000}} animate={{x: [-1000, 400, 0]}} transition={{duration: 3, delay: 1}}
                   whileHover={{scale: 2, opacity: 0.4}} className="text-white text-center">Animating text using framer
            motion</motion.h3>
    );
}
