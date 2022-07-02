import React from "react";
import styles from './Cards.module.scss';

interface Props {
    bgColor: string,
    total: string,
    category: string,
}

const FactsCard:React.FC<Props> = ({bgColor, total, category}) => {
    const style = {
        backgroundColor: `${bgColor}`,
        borderRadius: '10px'
    }
    return (
        <div className={styles['fact-card']} style={style}>
            <span>{total}</span>
            <span>{category}</span>
        </div>
    );
}

export default FactsCard;