"use client";
import React from 'react'
import Textt from "@/components/Textt";
import EnterExit from "@/components/EnterExit";
import Draggable from "@/components/Draggable";
import HoverClick from "@/components/hover&click";
import Trigger from "@/components/Trigger";
import {motion, AnimatePresence} from "framer-motion";

export default function Home() {
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 2}}>
            <AnimatePresence mode='wait'>
                <h1 className="text-white text-center"><a href="/about">About Page</a></h1>
            </AnimatePresence>
            <Textt/>
            <EnterExit/>
            <Draggable/>
            <HoverClick/>
            <Trigger/>
        </motion.div>
    );
}
