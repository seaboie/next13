import Image from 'next/image'
import React from 'react'

export default function MyProfilePicture() {
  return (
    <section className='w-full mx-auto'>
        <Image 
            src={'/images/logo.jpg'}
            width={200}
            height={200}
            alt='Kritbovorn avatar'
            priority
            className='rounded-full border-4 border-slate-600 dark:border-slate-500 drop-shadow-xl shadow-slate-800 mx-auto mt-8'
        />
    </section>
  )
}
