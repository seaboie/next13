import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import MyProfilePicture from '@/components/head/MyProfilePicture'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Kritbovorn' Blog",
  description: 'Created by: Kritbovorn',
  keywords: ['blog', 'my blog']
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ `${inter.className} dark:bg-slate-800`}>
        <Navbar />
        <MyProfilePicture />
        {children}
      </body>
    </html>
  )
}
