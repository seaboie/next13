import React from 'react'

type Props = {
    promise: Promise<Posts[]>
}

export default async function UserPosts({promise}: Props) {
    const posts = await promise;

    const content = posts.map(post => (
        <div key={post.id}>
            <div className='text-3xl'>{post.title}</div>
            <div className='text-lg'>{post.body}</div>
        </div>
    ))
  return content;
}
