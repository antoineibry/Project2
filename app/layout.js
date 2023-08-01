import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'
import Footer from '@components/Footer';

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Math with Antoine',
  description: 'Website that contains services provided by Mr. Antoine, Math teacher',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="app">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
