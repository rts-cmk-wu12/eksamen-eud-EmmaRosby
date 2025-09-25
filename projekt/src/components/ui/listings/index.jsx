
import "./listings.scss"
import Pagination from "../pagination";
import SearchForm from "../search";




async function Listing() {
    const response = await fetch(`${process.env.API_BASE_URL}/listings`);
    const listings = await response.json();
    //console.log(listings);

    return (
        <>
            <div className="listings-wrapper">
                <SearchForm />
                <Pagination listings={listings} />
               
            </div>
        </>
    );
}

export default Listing;


