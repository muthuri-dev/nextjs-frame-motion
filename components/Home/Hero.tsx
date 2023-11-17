import React from "react";

export default function Hero() {
    return (
        <main className="relative flex flex-col h-full w-full">
            <video autoPlay muted loop
                   className="rotate-180 absolute top-[300px] left-0 z-[1] w-full h-full object-cover h-[850px]">
                <source src="/blackhole.webm" type="video/webm"/>
            </video>
        </main>
    );
}