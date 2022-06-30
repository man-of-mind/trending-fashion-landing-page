import React from "react";
import styles from "./Content.module.scss";
import { ReactComponent as FacebookIcon } from "../../Assets/Icons/Facebook.svg";
import { ReactComponent as InstagramIcon } from "../../Assets/Icons/Instagram.svg";
import { ReactComponent as TwitterIcon } from "../../Assets/Icons/Twitter.svg";

interface Props {
    member: string,
    name: string,
    role: string,
    about: string
}

const Member:React.FC<Props> = ({member, name, role, about}) => {
    return (
        <div className={styles['team-member']}>
            <img src={member} alt="team member" />
            <span>{name}</span>
            <small>{role}</small>
            <div className={styles['detail']}>{about}</div>
            <div className={styles['social-icons']}>
                <FacebookIcon />
                <InstagramIcon />
                <TwitterIcon />
            </div>
        </div>
    );
}

export default Member;