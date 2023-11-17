"use client";
import React from 'react'
import {motion, AnimatePresence} from 'framer-motion';

export default function Draggable() {
    return (
        <div className="flex flex-col gap-[10px] items-center">
            <h1 className="text-center text-white ">Draggable object with framer motion</h1>
            <div className="flex flex-row gap-[200px] items-center justify-center mt-[120px]">
                <div>
                    <p className="text-white">No Constrains</p>
                    <motion.div className="w-[100px] h-[100px] bg-blue-400" drag></motion.div>
                </div>
                <div>
                    <p className="text-white">Y only Constrains</p>
                    <motion.div className="w-[100px] h-[100px] bg-blue-400" drag="y"></motion.div>
                </div>
                <div>
                    <p className="text-white">Drag Constrains</p>
                    <motion.div className="w-[100px] h-[100px] bg-blue-400 " drag dragConstraints={{left:0, right:100}}></motion.div>
                </div>
            </div>
        </div>
    );
}
