import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import MyProfilePicture from '@/components/head/MyProfilePicture'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Kritbovorn' Blog",
  description: 'ข้อมูลสำหรับ React NextJS',
  keywords: ['blog', 'เทคนิค react nextjs']
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-slate-800 h-screen flex flex-col`}>
        <div className=''>
          <Navbar />
          <MyProfilePicture />
          {children}
        </div>
      </body>
    </html>
  )
}
