import Image from 'next/image'
import { Inter, Bebas_Neue } from 'next/font/google'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });
const bebas = Bebas_Neue({subsets: ['latin'], weight: ['400']})

export default function Home() {
  return (
    <div>
      <div className='text-5xl'>Home Page</div>
      <Link href={'/users'}>
        Users
      </Link>
    </div>
  )
}
