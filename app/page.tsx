"use client";
import React from 'react'
import {motion} from 'framer-motion';
import Textt from "@/components/Textt";
import EnterExit from "@/components/EnterExit";
import Draggable from "@/components/Draggable";

export default function Home() {
    return (
        <main>
            <Textt/>
            <EnterExit/>
            <Draggable/>
        </main>
    );
}
