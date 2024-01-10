import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Pin at Ranchi',
    description: 'Pin at Ranchi client side UI',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="cupcake">
            <body className={inter.className}>
                <header>
                    <NavBar />
                </header>
                {children}
            </body>
        </html>
    )
}
