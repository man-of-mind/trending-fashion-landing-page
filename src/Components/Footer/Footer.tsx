import React from "react";
import styles from "./Footer.module.scss";
import { ReactComponent as FacebookIcon } from '../../Assets/Icons/Facebook2.svg';
import { ReactComponent as TwitterIcon } from '../../Assets/Icons/Twitter2.svg';
import { ReactComponent as InstagramIcon } from '../../Assets/Icons/Instagram2.svg';

const Footer = () => {
    return (
        <footer className={styles['footer-section']}>
            <span><em>Logo Here</em></span>
            <small>Live the life you want</small>
            <section>
                <FacebookIcon />
                <TwitterIcon style={{padding: '0 45px'}}/>
                <InstagramIcon />
            </section>
        </footer>
    );
}

export default Footer;