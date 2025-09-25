import Image from "next/image";
import Link from "next/link";
import "./listing-card.scss"

function ListingCard({ listing }) {
    return (
        <>
            <Link href={`/listing/${listing.id}`} >
                <article className="listing-card">
                    <div className="listing-card__wrapper">
                        <Image
                            src={listing.asset.url}
                            alt={listing.title}
                            width={100}
                            height={100}
                            className="listing-card__wrapper__img"
                        />
                    </div>
                    <h2 className="listing-card__title">{listing.title}</h2>
                </article>
            </Link>
        </>
    );
}

export default ListingCard;