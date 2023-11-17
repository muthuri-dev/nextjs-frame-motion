"use client";
import React from 'react'
import {motion, AnimatePresence} from 'framer-motion';

export default function Trigger() {
    return (
        <div className="flex flex-col items-center">
            <h2 className="text-white p-6">React scroll Animation with framer motion</h2>
            <Box/>
            <Box/>
            <Box/>
        </div>
    );
}

function Box() {
    return (
        <motion.div className="m-[200px] w-[100px] h-[100px] bg-white" 
                    initial={{opacity: 0, scale: 0, x: 500}}
                    whileInView={{opacity: 1, scale: 1,x: 0}} 
                    transition={{duration: 0.25, delay: 0.25}}>

        </motion.div>
    )
}