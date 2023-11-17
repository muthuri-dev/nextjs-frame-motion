"use client";
import React from 'react'
import {motion, AnimatePresence} from 'framer-motion';

export default function HoverClick() {
    const [show, setShow] = React.useState(false)
    return (
        <div className="flex justify-center h-[100vh] bg-gray-600 items-center">
            <motion.div className="bg-[#fff] p-[3rem] rounded-2xl shadow-blue-950" whileHover={{scale: 1.1}}
                    transition={{duration: 1, type: "spring"}} layout onClick={() => {
                setShow(!show)
            }}>
                <motion.h1 className="font-extrabold">Hover or Click</motion.h1>
                {show &&
                    <motion.p className="w-[600px] text-black" initial={{opacity: 0}} animate={{opacity: 1}}>Lorem ipsum dolor sit
                        amet, consectetur adipisicing elit. A alias asperiores commodi dolore dolorem explicabo
                        inventore ipsum magnam nam nulla optio perferendis porro reprehenderit saepe sed, sequi sit
                        tempore velit?</motion.p>}
            </motion.div>
        </div>
    );
}
