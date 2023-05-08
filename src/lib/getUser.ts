import React from 'react'

export default async function getUserById(id: string): Promise<Users> {

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

    if (!res.ok) throw new Error("Have Error");
    

    const data = await res.json() as Users;
  return data;
}
