import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='text-3xl grid place-content-center min-h-screen'>
      <h1 className="">Hello World!</h1>
      <button>
        <Link href={'/feedback'}>
          Feed back
        </Link>
      </button>

    </div>
  )
}
