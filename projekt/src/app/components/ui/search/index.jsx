/* "use client";

import { useContext } from "react";
import { searchContext } from "./provider";

function SearchForm({listings}) {
    const { setResults, setErrorMsg } = useContext(searchContext)

    function searchHandler(event) {
        setErrorMsg('');
        const { value } = event.target
        if (value !== '') {
            var filteredData = listings.filter(listing => { 
                if (
                    listing.title.toLowerCase().includes(value.toLowerCase())
                    || listing.description.toLowerCase().includes(value.toLowerCase())
                ) return listing;

            });
        }

        if(!filteredData?.length){
            setErrorMsg('Der er ingen resultater')
        }

        setResults(filteredData);
    }

    return (
        <>
            <div>
                <input type="search" onChange={searchHandler} />
            </div>
        </>
    );
}

export default SearchForm; */