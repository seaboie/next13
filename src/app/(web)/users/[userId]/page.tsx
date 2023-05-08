import getUserById from '@/lib/getUser'
import postUserById from '@/lib/postUser'
import React, { Suspense } from 'react'
import UserPosts from './components/UserPosts'
import { Metadata } from 'next'
import { title } from 'process'

interface Params {
    params: {
        userId: string
    }
}

export async function generateMetadata({params}:Params): Promise<Metadata> {
    const user = await getUserById(params.userId);

   return {
    title: user.name,
    description: `This is the page of ${user.company.bs}`,
    keywords: user.company.name
   }
}

export default async function UserPage({params}: Params) {

    const user = await getUserById(params.userId);
    const userPosts = postUserById(params.userId);

    // const [user, userPosts] = await Promise.all([getUserById(params.userId), postUserById(params.userId)])

  return (
    <div className='flex flex-col'>
        <div className='flex-grow'>{user.name}</div>

        <Suspense fallback={<div className='text-6xl'>Loading........</div>}>
            {/* @ts-expect-error Server Component */}
            <UserPosts promise={userPosts} />
        </Suspense>
    </div>
  )
}
