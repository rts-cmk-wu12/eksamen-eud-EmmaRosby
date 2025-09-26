import { cookies } from "next/headers";
import EditProfileForm from "./form";

async function ProfileInfo() {

    const cookieStore = await cookies();
    const userId = cookieStore.get("id_userid");
    const userToken = cookieStore.get("id_token");

    const response = await fetch(`${process.env.API_BASE_URL}/users/${userId.value}`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${userToken.value}`
        }
    });
    const userData = await response.json();

    return (
        <>
            <EditProfileForm userData={userData} />
        </>
    );
}

export default ProfileInfo;