import Link from 'next/link'
import React from 'react'
import SearchComponent from './SearchComponent'


export default function Navbar() {
  return (
    <nav className='bg-slate-600 py-4 px-4 sm:px-12 flex justify-between flex-col md:flex-row sticky top-0 drop-shadow-lg'>
        <h1 className='text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0'>
            <Link href={'/'}>
                Wiki Rocket!
            </Link>
        </h1>

        <SearchComponent />
    </nav>
  )
}
