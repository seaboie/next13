import { getPostData, getSortedPostData } from '@/libs/posts';
import React from 'react'
import { notFound } from 'next/navigation'
import { Metadata } from 'next';
import getFormatDate from '@/libs/formatDate/getFormatDate';
import Link from 'next/link';


export function generateMetadata({params}: {params: {postId: string}}): Metadata {
    const { postId } = params;
    const posts = getSortedPostData();

    const post = posts.find((post) => post.id === postId);

    if (!post) {
        return {
            title: 'Post not Founded...'
        }
    }

    return {
        title: post?.title,
    }
}

export function generateStaticParams() {
    const posts = getSortedPostData();

    return posts.map((post) => ({
        postId: post.id
    }))
}


export default async function Post({params}: {params: {postId: string}}) {

    const { postId } = params;
    const posts = getSortedPostData();

    if (!posts.find((post) => post.id === postId)) notFound();

    const { id, title, date, contentHtml } = await getPostData(postId);

    const pubDate = getFormatDate(date);

  return (
    <main className='px-6 my-14 prose prose-xl prose-slate dark:prose-invert mx-auto'>
        <h1 className='text-3xl mt-4 mb-0'>
            {title}
        </h1>
        <p className='mt-0'>
            {pubDate}
        </p>

        <article>
            <section dangerouslySetInnerHTML={{__html: contentHtml}} />
            <p className='my-28'>
                <Link className='no-underline' href={'/'}>
                    ⇤ &nbsp; &nbsp; กลับหน้าแรก
                </Link>
            </p>
        </article>
    </main>
  )
}
