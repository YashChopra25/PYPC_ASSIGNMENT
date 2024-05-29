'use client'
import algoliasearch from "algoliasearch/lite";
import "instantsearch.css/themes/satellite.css";
import { Hits, InstantSearch, SearchBox, Configure } from "react-instantsearch";
import { Hit } from "../component/Hit";


const searchClient = algoliasearch("0SXO0Y8B40", "f997576bee04fe0536c509b356f6ab00");

const Search = () => {
    return (
        <InstantSearch
            searchClient={searchClient}
            indexName="FrontendEngineer_Maps"

        >
            <Configure hitsPerPage={3} />
            
                <SearchBox className={'!rounded'} />
<div className='w-1/2 max-md:w-full'>
                <Hits hitComponent={Hit} />
            </div>
        </InstantSearch>

    );
};
export default Search