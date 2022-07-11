import React from "react";
import styles from "./Header.module.scss";
import { ReactComponent as ArrowDownIcon } from "../../Assets/Icons/ArrowDown.svg";
import { ReactComponent as Menu } from "../../Assets/Icons/Hamburger.svg";
import { ReactComponent as Arrow } from "../../Assets/Icons/Arrow.svg";

const Header = () => {
    const [showMenu, setShowMenu] = React.useState<boolean>(false);
    
    return (
        <header className={styles['header-section']}>
            <nav>
                <p>Denrele Paul</p>
                <ul>
                    <li>Home</li>
                    <li>About me</li>
                    <li>Projects</li>
                    <li>
                        <span>Contact me</span>
                        <Arrow style={{marginLeft: "10px", paddingBottom: "5px"}}/>
                    </li>
                </ul>
                <i>
                    <Menu onClick={() => setShowMenu(!showMenu)} style={{cursor: 'pointer'}}/>
                </i>
            </nav>
            <div className={styles['mb-menu']} style={{ display: showMenu ? 'flex' : 'none', }}>
                <ul>
                    <li>Home</li>
                    <li>About me</li>
                    <li>Projects</li>
                    <li>
                        <span>Contact me</span>
                        <Arrow style={{marginLeft: "5px", paddingBottom: "5px"}}/>
                    </li>
                </ul>
            </div>
            <section>
                <h1>Trendy Fashion</h1>
                <ArrowDownIcon />
            </section>
        </header>
    );
}

export default Header;