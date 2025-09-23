import LoginForm from "@/app/components/ui/login";
import Footer from "@/app/components/ui/footer";
import Header from "@/app/components/ui/header";

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