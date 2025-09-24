import Link from "next/link";
import "./header.scss";
import { cookies } from "next/headers";

function Header() {
        const cookieStore = cookies();
        const token = cookieStore.get("id_token");
        const isLoggedIn = !token;

    return (  
        <header className="header">
            <Link href="/"><img src="/images/logo.png" alt="SwapHub" className="header__img"/></Link>
            <ul className="header__list">
                <li className="header__list__nav"><Link href="/">Listings</Link></li>
                <li className="header__list__nav"><Link href="/community">Community</Link></li>
                <li className="header__list__nav"><Link href="/contact">Contact</Link></li>
                {isLoggedIn ? (
                    <li ><Link href="/login" className="header__list__gap">Sign in</Link></li>
                    
                ) : (
                    <li><Link href="/" className="header__list__gap" >Log out</Link></li>              
                )}
                {isLoggedIn ? (
                    <li ><Link href="/register" className="header__list__btn">Register</Link></li>
                ) : (
                    <li ><Link href="/profile" className="header__list__btn">Profile</Link></li>
                )}
            </ul>
        </header>
    );
}

export default Header;