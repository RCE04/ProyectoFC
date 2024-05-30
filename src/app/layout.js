import '@/app/globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Turismo Castro del Rio',
  description: 'Aqui podras encontrar una guia detallada con fotos y historias de castro del rio',
  manifest: '/manifest.json'
}
export default async function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className={inter.className}>
        <link rel="icon" href="/logo2.png" />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
