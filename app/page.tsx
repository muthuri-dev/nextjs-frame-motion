"use client";
import React from 'react'
import Textt from "@/components/Textt";
import EnterExit from "@/components/EnterExit";
import Draggable from "@/components/Draggable";
import HoverClick from "@/components/hover&click";
import Trigger from "@/components/Trigger";


export default function Home() {
    return (
        <main>
            <Textt/>
            <EnterExit/>
            <Draggable/>
            <HoverClick/>
            <Trigger/>
        </main>
    );
}
