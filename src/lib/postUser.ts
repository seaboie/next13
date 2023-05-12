import { notFound } from 'next/navigation';
import React from 'react'

export default async function postUserById(id: string): Promise<Posts[]> {

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`, {next: {revalidate: 60}});

    if (!res.ok) undefined;

    const data = await res.json() as Posts[]
    
  return  data
}
