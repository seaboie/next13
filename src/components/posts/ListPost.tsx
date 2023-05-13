import getFormatDate from '@/libs/formatDate/getFormatDate';
import Link from 'next/link';
import React from 'react'

type Props = {
    post: BlogPost
}

export default function ListPost({ post }: Props) {
    const { id, title, date } = post;

    const formatDate = getFormatDate(date);
    return (
        <li className='my-20 text-2xl dark:text-white/90'>
            <Link
                href={`/posts/${id}`}
                className='underline hover:text-black/70 dark:hover:text-white'
            >
                {title}
            </Link>
            <br />

            <p className='text-sm mt-1'>
                {formatDate}
            </p>
        </li>
    )
}