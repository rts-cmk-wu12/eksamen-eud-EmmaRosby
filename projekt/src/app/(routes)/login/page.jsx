import LoginForm from "@/components/ui/login";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";

function LoginPage() {
    return (  
        <>
        <Header />
        <main>
            <LoginForm />
        </main>
        <Footer />
        </>
    );
}

export default LoginPage;