import { notFound } from 'next/navigation';
import React from 'react'

export default async function getUserById(id: string): Promise<User> {

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

    if (!res.ok) undefined;
    

    const data = await res.json() as User;
  return data;
}
