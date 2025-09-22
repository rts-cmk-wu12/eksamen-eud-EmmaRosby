import ListingCard from "../listing-card";
import "./listings.scss"
import { IoArrowBackOutline, IoArrowForward } from "react-icons/io5";

async function Listing() {

    // Fetch all listings
    const response = await fetch("http://localhost:4000/api/v1/listings");
    const listings = await response.json();
    console.log(listings);
    
    //Pagination

    // Clac the amount of pages
    console.log(Math.ceil(listings.length / 6));
    const pageAmout = Math.ceil(listings.length / 6)

    return (
        <>
            <div className="listings">

                {listings.slice(0, 6).map(listing =>
                    <ul key={listing.id} className="listings__items">
                        <li><ListingCard listing={listing} /></li>
                    </ul>
                )}
            </div>
            <div >
                <button><IoArrowBackOutline /></button>
                {listings.map(pages =>
                    <button key={pages.id}>{pageAmout}</button>
                )}
                <button><IoArrowForward /></button>
            </div>
        </>
    );
}

export default Listing;


