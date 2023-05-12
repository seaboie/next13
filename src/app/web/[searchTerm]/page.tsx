import React from 'react'
import getWikiResult from '../../../../libs/getWikiResult'
import { Metadata } from 'next'
import Item from './component/Item'
import { notFound } from 'next/navigation'

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
                
                    // Object.values(results).map(result => (
                    //     // <p>{JSON.stringify(result)}</p>
                    //     <Item key={result.pageid} result={result} />
                    // ))
                  results 
                  ? (
                    Object.values(results).map(result => (
                        <Item key={result.pageid} result={result} />
                    ))
                  ) 
                  : (
                     notFound()
                  )
               
            }
        </main>
    )
    
  return content;
}