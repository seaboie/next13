import Link from 'next/link'
import React from 'react'
import { FaYoutube, FaTwitter, FaGithub, FaLaptop } from 'react-icons/fa'

export default function Navbar() {
    return (
        <nav className='bg-slate-600 p-4 sticky top-0 z-10 drop-shadow-xl'>
            <div className='prose prose-xl mx-auto flex justify-between flex-col sm:flex-row'>
                <h1 className='text-2xl lg:text-3xl font-bold grid place-content-center mb-2 md:mb-0'>
                    <Link
                        href={'/'}
                        className='text-white/90 hover:text-white no-underline'
                    >
                        Kritbovorn
                    </Link>
                </h1>

                <div className='flex flex-row align-middle justify-center sm:justify-evenly gap-4 text-2xl lg:text-3xl'>
                    <Link href={'https://studio.youtube.com/channel/UCwKIQ3fSi2Kjwkp6xzgGSbg'} className='text-white/80 hover:text-white'>
                        <FaYoutube />
                    </Link>
                    <Link href={'https://github.com/seaboie'} className='text-white/80 hover:text-white'>
                        <FaGithub />
                    </Link>
                    
                </div>
            </div>
        </nav>
    )
}
