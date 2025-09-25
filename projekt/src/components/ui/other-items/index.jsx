import ListingCard from "../listing-card";
import "./other-items.scss"

async function OtherItems({ item }) {

    const response = await fetch(`${process.env.API_BASE_URL}/listings`);
    const listings = await response.json();
    //console.log(listings);
    
    const itemUserId = item.userId;
    //console.log(itemUserId);
    
    const matches = listings.filter(user => user.userId == itemUserId)
    //console.log(matches);
    
    

    return (
        <>
            <h2>Other items from this Swapper</h2>
            <ul className="other">
                {matches.map(listings =>
                    <li key={listings.id}>
                        <ListingCard listing={listings}  />
                    </li>
                )}
            </ul>
        </>
    );
}

export default OtherItems;