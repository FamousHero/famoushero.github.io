import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navbar, Footer } from '@/components'

//Imported Font 
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Daniel\'s Portfolio',
  description: 'Website designed to show off previous projects and assignments.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/**Use of imported font */}
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
