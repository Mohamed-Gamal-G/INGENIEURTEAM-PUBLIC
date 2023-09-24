import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'Mohamed Gamal',
  description: 'Mohamed Gamal Front End Developer',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
        {children}
      </body>
    </html>
  )
}