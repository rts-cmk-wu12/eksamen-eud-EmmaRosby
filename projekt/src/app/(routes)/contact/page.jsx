import ContactForm from "@/components/ui/contact";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";

function ContactPage() {
    return (  
        <>
            <Header />

            <main>
                <ContactForm />
            </main>

            <Footer />
        </>
    );
}

export default ContactPage;