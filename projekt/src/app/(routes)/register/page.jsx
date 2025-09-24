import CreateUserForm from "@/app/components/ui/create-user";
import Footer from "@/app/components/ui/footer";
import Header from "@/app/components/ui/header";

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