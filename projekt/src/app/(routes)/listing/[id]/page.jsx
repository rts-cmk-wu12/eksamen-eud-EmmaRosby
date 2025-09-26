import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import OtherItems from "@/components/ui/other-items";
import RequestSwapButton from "@/components/ui/request-swap";
import Image from "next/image";
import Link from "next/link";
import { cookies } from "next/headers";
import "./listing.scss";

async function ListingDetailPage({ params }) {
    const { id } = await params;
    const response = await fetch(`${process.env.API_BASE_URL}/listings/${id}`);
    const item = (await response.json());

    const cookieStore = await cookies();
    const token = cookieStore.get("id_token");
    const isLoggedIn = !token;

    const listingDate = item.asset.createdAt.slice(0, 10);
    /* ____________________________________________________________________________________ */
    if (!isLoggedIn) {
        const myResponse = await fetch(`${process.env.API_BASE_URL}/listings`);
        const data = (await myResponse.json());

        const myUserId = cookieStore.get("id_userid")
        var myMatches = data.filter(user => user.userId == myUserId.value);
    }
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
                        {isLoggedIn ? (
                            <Link href="/login" className="item__info__request" >
                                <button className="item__info__login">Sign in to Swap</button>
                            </Link>
                        ) : (
                            <RequestSwapButton myMatches={myMatches} item={item} />
                        )}
                    </div>
                </article>
                <OtherItems item={item} />
            </main>
            <Footer />
        </>
    );
}

export default ListingDetailPage;