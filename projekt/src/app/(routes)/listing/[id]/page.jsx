import Header from "@/app/components/ui/header";
import Footer from "@/app/components/ui/footer";
import Image from "next/image";
import "./listing.scss";
import OtherItems from "@/app/components/ui/other-items";

async function ListingDetailPage({ params }) {
    const { id } = await params;
    const response = await fetch(`http://localhost:4000/api/v1/listings/${id}`);
    const item = (await response.json());

    console.log(item);

    const listingDate = item.asset.createdAt.slice(0, 10);

    return (
        <>
        <Header />
        <main>
            <article className="item">
                <div className="item__wrapper">
                    <Image
                        src={item.asset.url}
                        alt={item.title}
                        width={100}
                        height={100}
                        className="item__wrapper__img"
                    />
                </div>
                <div className="item__info">
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <span>On SwapHun since: {listingDate}</span>
                    <button className="item__info__request">Propose a swap</button>
                </div>
            </article>

            <OtherItems />
        </main>
        <Footer />
        </>
    );
}

export default ListingDetailPage;