import React from "react";
import styles from "./Header.module.scss";
import { ReactComponent as ArrowDownIcon } from "../../Assets/Icons/ArrowDown.svg";

const Header = () => {
    return (
        <header className={styles['header-section']}>
            <nav>
                <p>Denrele Paul</p>
                <ul>
                    <li>Home</li>
                    <li>About me</li>
                    <li>Projects</li>
                    <li>Contact me</li>
                </ul>
            </nav>
            <section>
                <h1>Trendy Fashion</h1>
                <ArrowDownIcon />
            </section>
        </header>
    );
}

export default Header;