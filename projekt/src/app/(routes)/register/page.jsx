import CreateUserForm from "@/components/ui/create-user";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";

function RegisterPage() {
    return (
        <>
            <Header />
            <main>
                <CreateUserForm />
            </main>
            <Footer />
        </>
    );
}

export default RegisterPage;