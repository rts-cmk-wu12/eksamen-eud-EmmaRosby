import Footer from "@/app/components/ui/footer";
import Header from "@/app/components/ui/header";
import ProfileInfo from "@/app/components/ui/profile-info";


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