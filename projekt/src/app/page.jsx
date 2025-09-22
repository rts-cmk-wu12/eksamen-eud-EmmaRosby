import Footer from "./components/footer";
import Header from "./components/header";
import Listing from "./components/listings";


export default async function Home() {



  return (
    <>
    <h1>Listings</h1>
      <Header/>
      <Listing />
      <Footer />
    </>
  );
}
