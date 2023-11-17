"use client";
import React from 'react'
import {motion, AnimatePresence} from 'framer-motion';

export default function EnterExit() {
    const [show, setShow] = React.useState(true);
    return (
        <div className="flex flex-col gap-[10px] items-center">
            <h1 className="mt-[30px] text-white">Framer Motion Tutorial:Exit and Enter animation</h1>
            <AnimatePresence>
                {show && <motion.div className="w-[100px] h-[100px] bg-blue-500" initial={{opacity: 0, x: 0}}
                                     animate={{opacity: 1, x: -100}} exit={{opacity: 0, x: -150}}
                                     transition={{duration: 2, delay: 1}}>

                </motion.div>}
            </AnimatePresence>
            <button onClick={() => setShow(!show)}
                    className="text-white py-2 px-6 bg-blue-600 rounded-full">{show ? "Remove cube" : "Add Box"}</button>
        </div>
    );
}
