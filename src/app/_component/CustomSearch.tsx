import React, { useState, useRef, useEffect } from 'react';
import {
    useInstantSearch,
    useSearchBox,
    UseSearchBoxProps
} from 'react-instantsearch';
import { Hit } from './Hit';
import { useMapContext } from '../../Context/useMapContext';

function CustomSearchBox(props: UseSearchBoxProps) {
    const { query, refine } = useSearchBox(props);
    const { results } = useInstantSearch();
    const [inputValue, setInputValue] = useState(query);
    const inputRef = useRef<HTMLInputElement>(null);
    const { hits } = results
    const [RemoveInitailPrintOfHit, SetremoveInitailPrintOfHit] = useState<null | string>(null);

    const Props = useMapContext()
    function setQuery(newQuery: string) {
        SetremoveInitailPrintOfHit(newQuery)
        setInputValue(newQuery);
        refine(newQuery);
    }
    useEffect(() => {
        function ShowUserOnMapAsSearchResult() {
            if (!Props) {
                return
            }
            const { setMapViewUserData } = Props
            if (!RemoveInitailPrintOfHit) {
                setMapViewUserData([])
                return;
            }
            if (hits.length > 0) {
                setMapViewUserData(hits)
            }
        }
        ShowUserOnMapAsSearchResult()
    }, [results])
    return (
        <div>
            <form
                action=""
                role="search"
                noValidate
                onSubmit={(event) => {
                    event.preventDefault();
                    event.stopPropagation();

                    if (inputRef.current) {
                        inputRef.current.blur();
                    }
                }}
                onReset={(event) => {
                    event.preventDefault();
                    event.stopPropagation();

                    setQuery('');
                    // to clear the result stored in context marker on clicking the reset button of search box 
                    // if (Props) {
                    //     const { setMapViewUserData } = Props
                    //     setMapViewUserData([])
                    // }

                    if (inputRef.current) {
                        inputRef.current.focus();
                    }
                }}
            >
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input
                        ref={inputRef}
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        placeholder="Search Members"
                        spellCheck={false}
                        maxLength={512}
                        type="search"
                        value={inputValue}
                        onChange={(event) => {

                            setQuery(event.currentTarget.value);
                        }}
                        className='block w-full p-3 ps-10 text-gray-600 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:outline-none focus:border-blue-500 placeholder:text-black/70 placeholder:text-lg placeholder:font-sans'
                    />

                </div>
            </form >
            {
                RemoveInitailPrintOfHit && <div className='mt-3 ml-5 w-1/2 max-md:w-full overflow-y-scroll rounded-lg max-h-64 cursor-pointer'>
                    {
                        hits.length > 0 && hits.map((Hitdata, index) => (
                            <Hit hit={Hitdata} key={index} />
                        ))
                    }
                </div>
            }
        </div >
    );
}
export default CustomSearchBox