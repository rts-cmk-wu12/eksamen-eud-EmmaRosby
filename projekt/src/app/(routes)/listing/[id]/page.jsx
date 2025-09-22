import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import Image from "next/image";

async function ListingDetailPage({ params }) {
    const { id } = await params;
    const response = await fetch(`http://localhost:4000/api/v1/listings/${id}`);
    const item = (await response.json());

    console.log(item);


    return (
        <>
        <Header />
        <article>
            <Image
                src={item.asset.url}
                alt={item.title}
                width={100}
                height={100}
                className="listing-card__wrapper__img"
            />
            <div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <span>On SwapHun since: {item.asset.createdAt}</span>
                <button>Propose a swap</button>
            </div>
        </article>
        <Footer />
        </>
    );
}

export default ListingDetailPage;