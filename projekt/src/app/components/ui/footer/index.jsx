import Link from "next/link";
import "./footer.scss";

import { FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__socials">
                <img src="/images/logo.png" alt="SwapHub" className="footer__socials__img" />
                <ul className="footer__socials__list">
                    <li><Link href=""><FaXTwitter /></Link></li>
                    <li><Link href=""><FaInstagram /></Link></li>
                    <li><Link href=""><FaYoutube /></Link></li>
                    <li><Link href=""><FaLinkedin /></Link></li>
                </ul>
            </div>
            <nav className="footer__nav">
                <p className="footer__nav__title">About SwapHub</p>
                <ul  className="footer__nav__list">
                    <li><Link href="#">How it works</Link></li>
                    <li><Link href="#">Community guidelines</Link></li>
                    <li><Link href="#">Our mission</Link></li>
                    <li><Link href="/contact">Contact us</Link></li>
                </ul>
            </nav>
            <nav className="footer__nav">
                <p className="footer__nav__title">Discover</p>
                <ul  className="footer__nav__list">
                    <li><Link href="#">Browse categories</Link></li>
                    <li><Link href="#">Popular Swaps</Link></li>
                    <li><Link href="#">Succcessful stories</Link></li>
                    <li><Link href="#">Upcomming events</Link></li>
                </ul>
            </nav>
            <nav className="footer__nav">
                <p className="footer__nav__title">Support</p>
                <ul  className="footer__nav__list">
                    <li><Link href="#">Help center</Link></li>
                    <li><Link href="#">FAQs</Link></li>
                    <li><Link href="#">Safety tips</Link></li>
                    <li><Link href="#">Repport an issue</Link></li>
                </ul>
            </nav>

        </footer>
    );
}

export default Footer;