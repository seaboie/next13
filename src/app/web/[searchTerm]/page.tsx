import React from 'react'
import getWikiResult from '../../../../libs/getWikiResult'
import { Metadata } from 'next'
import Item from './component/Item'

type Props = {
    params: {
        searchTerm: string
    }
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
    const wikiData: Promise<SearchResult> = getWikiResult(params.searchTerm);
    const data = await wikiData;

    const displayTerm = params.searchTerm.replaceAll('%20', ' ');

    if (!data.query?.pages) {
        return {
            title: `${displayTerm} not founded`,
        }
    }

    return {
        title: displayTerm,
        description: `Search results for ${displayTerm}`
    }
}

export default async function SearchResults({params}: Props) {
    const wikiData: Promise<SearchResult> = getWikiResult(params.searchTerm);
    const data = await wikiData;

    const results: Result[] | undefined = data.query?.pages;

    const content = (
        <main className='bg-slate-200 mx-auto max-w-lg py-1'>
            {
                results
                ? (
                    Object.values(results).map(result => (
                        // <p>{JSON.stringify(result)}</p>
                        <Item key={result.pageid} result={result} />
                    ))
                )
                : (
                    <h1 className='p-2 text-xl text-red-700'>
                        {`${params.searchTerm} not founded...`}
                    </h1>
                )
            }
        </main>
    )
    
  return content;
}