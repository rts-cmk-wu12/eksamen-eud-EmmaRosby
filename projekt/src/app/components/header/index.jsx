import Link from "next/link";
import "./header.scss";

function Header() {
    return (  
        <header className="header">
            <Link href="/"><img src="/images/logo.png" alt="SwapHub" className="header__img"/></Link>
            <ul className="header__list">
                <li className="header__list__nav"><Link href="#">Listings</Link></li>
                <li className="header__list__nav"><Link href="/community">Community</Link></li>
                <li className="header__list__nav"><Link href="#">Contact</Link></li>
                <li ><Link href="/login" className="header__list__gap">Sign in</Link></li>
                <li ><Link href="#" className="header__list__btn">Register</Link></li>
            </ul>
        </header>
    );
}

export default Header;