import { notFound } from 'next/navigation';
import React from 'react'

export default async function getAllUsers(): Promise<User[]> {

    const urlString = 'https://jsonplaceholder.typicode.com/users'
    const res = await fetch(urlString);

    if (!res.ok) undefined;

    const datas = await res.json() as User[];

    return datas;
}
