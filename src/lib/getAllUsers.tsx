import React from 'react'

export default async function getAllUsers(): Promise<Users[]> {

    const urlString = 'https://jsonplaceholder.typicode.com/users'
    const res = await fetch(urlString);

    if (!res.ok) throw new Error("User error");

    const datas = await res.json() as Users[];

    return datas;
}
