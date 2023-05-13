import { getSortedPostData } from '@/libs/posts'
import React from 'react'
import ListPost from './ListPost';

export default function Posts() {
    const posts = getSortedPostData();
    return (
        <section className='max-w-2xl mx-auto mt-6'>
            <h2 className='text-4xl font-bold dark:text-white/90'>
                Blog.
            </h2>
            <ul className='w-full my-8'>
        {
            posts.map((post) => (
                <ListPost key={post.id} post={post} />
            ))
        }
            </ul>
        </section>
    )
}
