'use client'
import algoliasearch from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch";
import CustomSearchBox from "./CustomSearch";


const searchClient = algoliasearch(process.env.NEXT_PUBLIC_APP_ID!, process.env.NEXT_PUBLIC_API_SEARCH_KEY!);

const AlgoliaSearch = () => {

    return (
        <InstantSearch
            searchClient={searchClient}
            indexName={process.env.NEXT_PUBLIC_Alogolia_IndexName}
            stalledSearchDelay={300}
            future={
                {
                    preserveSharedStateOnUnmount: true,
                }
            }

        >
            <CustomSearchBox />
        </InstantSearch >

    );
};
export default AlgoliaSearch