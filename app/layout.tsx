import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'
import { isWorld } from '@/lib/lang'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: '阿博木',
  description: isWorld ? '我們用心打造每一款應用' : '我们用心打造每一款应用',
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang={isWorld ? "zh-Hant" : "zh-Hans"}>
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
