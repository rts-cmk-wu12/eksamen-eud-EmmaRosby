"use client";
import "./header.scss";

// taget fra et tidligere project

function LogOutButton() {

    const handleLogout = () => {
        document.cookie = "id_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        document.cookie = "id_userid=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        window.location.reload();
    };
    return (
        <>
            <li>
                <button className="header__list__gap" onClick={handleLogout}>Log out</button>
            </li>
        </>
    );
}

export default LogOutButton;