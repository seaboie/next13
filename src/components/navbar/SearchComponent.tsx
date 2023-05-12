'use client';

import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react'

export default function SearchComponent() {

  const [search, setSerarch] = useState("");
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
     
    setSerarch('');
    router.push(`/web/${search}`)
  }
  
  
  return (
    <form 
      onSubmit={handleSubmit}
      className='w-50 flex justify-center md:justify-between'
    >

      <input 
        type='text'
        placeholder='Search...'
        value={search}
        onChange={(e) => setSerarch(e.target.value)}
        className='bg-white px-2 w-80 text-lg rounded-xl'
      />

      <button
        className='p-4 text-xl rounded-xl bg-slate-300 hover:bg-slate-500 ml-2 font-bold'
      >
        🚀
      </button>

    </form>
  )
}
