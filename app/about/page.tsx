"use client"
import React from "react";
import {motion} from "framer-motion";

export default function About() {
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 2}}>
            <div className="text-white text-center p-6">Home page</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur cum deserunt dicta, doloremque eum
                fuga incidunt inventore iure, minus molestiae quisquam unde veritatis voluptates. Accusantium atque
                culpa deserunt repellat tenetur?</p>
        </motion.div>
    );
}