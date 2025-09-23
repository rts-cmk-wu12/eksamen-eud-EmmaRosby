
import "./listings.scss"
import Pagination from "../pagination";
import SearchForm from "../search-one";




async function Listing() {
    const response = await fetch("http://localhost:4000/api/v1/listings");
    const listings = await response.json();
    console.log(listings);

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


