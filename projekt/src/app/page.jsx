import Footer from "./components/ui/footer";
import Header from "./components/ui/header";
import Listing from "./components/ui/listings";


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
