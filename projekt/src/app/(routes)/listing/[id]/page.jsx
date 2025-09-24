import Header from "@/app/components/ui/header";
import Footer from "@/app/components/ui/footer";
import Image from "next/image";
import "./listing.scss";
import OtherItems from "@/app/components/ui/other-items";
import { cookies } from "next/headers";
import Link from "next/link";

async function ListingDetailPage({ params }) {
    const { id } = await params;
    const response = await fetch(`${process.env.API_BASE_URL}/listings/${id}`);
    const item = (await response.json());
    console.log(item);

    const cookieStore = cookies();
    const token = cookieStore.get("id_token");
    const isLoggedIn = !token;

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
                        {isLoggedIn ? (
                            <Link href="/login" className="item__info__request">Sign in to Swap</Link>
                        ) : (
                            <button 
                                className="item__info__request"
                                //onClick={() => dispatch({ type: "showModal", showModal: true,})}
                            >Propose a swap</button>
                        )}
                    </div>
                </article>
                <OtherItems />
            </main>
            <Footer />

            {/* {state.showModal && (
                <div className="overlay">
                    <form className="confirmDeleteModal" action={formAction}>
                        <span className="confirmDeleteModal__heading">Er du sikker på at slette {state.currentKage?.name}</span>
                        <button type="bytton" onClick={() => { dispatch({type: "hideModal"}) }}>Annuler</button>
                        <input type="hidden" name="id" value={state.currentKage?.id} readOnly />
                        <button type="submit">Slet</button>

                    </form>

                </div>
            )} */}
        </>
    );
}

export default ListingDetailPage;