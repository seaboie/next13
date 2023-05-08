import React from 'react'

export default async function postUserById(id: string): Promise<Posts[]> {

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);

    if (!res.ok) throw new Error("User error");

    const data = await res.json() as Posts[]
    
  return  data
}
