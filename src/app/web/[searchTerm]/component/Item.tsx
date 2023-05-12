import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
    result: Result
}

export default function Item({ result }: Props) {

    const itemText = (
        <div className='flex flex-col justify-center'>
            <h2>
                <Link
                    href={`https://en.wikipedia.org/?curid=${result.pageid}`} target='_blank'
                    className='text-xl font-bold underline'
                >
                    {result.title}
                </Link>
            </h2>
            <p>{result.extract}</p>
        </div>
    )

    const content = result.thumbnail?.source
    ? (
        <article className='m-4 max-w-lg'>
            <div className='flex flex-row gap-4'>
                <div className='flex flex-col justify-center'>
                    <Image
                        src={result.thumbnail.source}
                        width={result.thumbnail.width}
                        height={result.thumbnail.height}
                        alt={result.title}
                        priority
                     />
                </div>
                {itemText}
            </div>
        </article>
    )
    : (
        <article className='m-4 max-w-lg'>
            {itemText}
        </article>
    )
    return content;
}