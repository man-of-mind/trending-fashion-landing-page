import React from "react";
import styles from "./Content.module.scss";
import { ReactComponent as ServiceIcon } from "../../Assets/Icons/ServiceIcon.svg";

interface Props {
    category: string,
    detail: string
}

const Service:React.FC<Props> = ({category, detail})=> {
    return (
        <div className={styles['service']}>
            <ServiceIcon />
            <h1>{category}</h1>
            <p>{detail}</p>
        </div>
    );
}

export default Service;