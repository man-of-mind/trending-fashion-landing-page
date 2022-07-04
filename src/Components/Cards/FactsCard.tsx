import React from "react";
import styles from './Cards.module.scss';

interface Props {
    bgColor: string,
    total: string,
    category: string,
    width: string,
    height: string,
    fontSize: string
}

const FactsCard:React.FC<Props> = ({bgColor, total, category, width, height, fontSize}) => {
    const style = {
        backgroundColor: `${bgColor}`,
        borderRadius: '10px',
        width: `${width}`,
        height: `${height}`,
        fontSize: `${fontSize}`
    }
    return (
        <div className={styles['fact-card']} style={style}>
            <span>{total}</span>
            <span>{category}</span>
        </div>
    );
}

export default FactsCard;