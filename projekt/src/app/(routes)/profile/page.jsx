import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import ProfileInfo from "@/components/ui/profile-info";


function ProfilePage() {
    return (  
        <>
        <Header />
        <main>
            <ProfileInfo /> 
        </main>
        <Footer /> 
        </>
    );
}

export default ProfilePage;