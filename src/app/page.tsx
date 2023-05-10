import Image from 'next/image'
import { Inter } from 'next/font/google'
import Sidebar from '@/context/Sidebar'
import SidebarNav from './SidebarNav'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

    <div>
    <div className='text-6xl'>Hey Home</div>
    <Sidebar>
      <SidebarNav  />
      <div >boie</div>
    </Sidebar>

    </div>
    
  )
}
