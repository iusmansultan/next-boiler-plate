import navStyles from '../styles/Nav.module.css';
import Link from 'next/Link';

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <Link href="/" className={navStyles.logo}>
                Logo
            </Link>
            <ul className={navStyles.navList}>
                <li className={navStyles.navItem}>
                    <Link href="/">Home</Link>

                </li>
                <li className={navStyles.navItem}>
                    <Link href="/about">About</Link>

                </li>

            </ul>
        </nav>
    )
}

export default Nav;