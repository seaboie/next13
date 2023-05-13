import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <nav className='bg-slate-600 p-4 sticky top-0 z-10 drop-shadow-xl'>
            <div className='prose prose-xl mx-auto flex justify-between flex-col sm:flex-row'>
                <h1 className='text-3xl font-bold grid place-content-center mb-2 md:mb-0'>
                    <Link
                        href={'/'}
                        className='text-white/90 hover:text-white no-underline'
                    >
                        Kritbovorn Taweeyossak
                    </Link>
                </h1>
            </div>
        </nav>
    )
}
