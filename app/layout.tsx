import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import React from "react";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Space Portfolio',
    description: 'This is a portfolio of space images.',
}

export default function RootLayout({ children, }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={`${inter.className} bg-[#030014] overflow-x-hidden`}>{children}</body>
        </html>
    )
}
