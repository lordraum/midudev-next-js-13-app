import './globals.css'
import { Inter } from 'next/font/google'
import PageHeader from './components/PageHeader'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aplicación Next js',
  description: 'Generated by create next app'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='es'>
      <body className={inter.className}>
        <PageHeader />
        {children}
      </body>
    </html>
  )
}
