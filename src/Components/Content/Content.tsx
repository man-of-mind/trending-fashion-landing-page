import React from "react";
import FactsCard from "../Cards/FactsCard";
import styles from './Content.module.scss';
import ProductFlower from '../../Assets/Images/ProductFlower.svg';
import CompanyFlower from '../../Assets/Images/CompanyFlower.svg';

const Content = () => {
    return (
        <div className={styles['content']}>
            <h1>FACTS &#38; FIGURES</h1>
            <section>
                <FactsCard bgColor="#D35796" total="15+" category="CLIENTS"/>
                <FactsCard bgColor="#9256B7" total="1k" category="AWARDS"/>
                <FactsCard bgColor="#578388" total="10k" category="PROJECTS"/>
            </section>
            <div className={styles['product']}>
                <h1>Our Products</h1>
                <hr></hr>
                <div className={styles['grid-container']}>
                    <figure>
                        <img src={ProductFlower} alt="product flower" />
                    </figure>
                    <section className={styles['about-company']}>
                        <h3>Something Great About your company </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Massa in etiam blandit eleifend ultricies urna nunc donec 
                            ultrices.  Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit. Massa in etiam blandit eleifend ultricies urna nunc donec 
                            ultrices.
                        </p>
                        <button>View</button>
                    </section>
                    <section className={styles['about-company']}>
                    <h3>Something Great About your company </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Massa in etiam blandit eleifend ultricies urna nunc donec 
                            ultrices.  Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit. Massa in etiam blandit eleifend ultricies urna nunc donec 
                            ultrices.
                        </p>
                        <button>View</button>
                    </section>
                    <figure>
                        <img src={CompanyFlower} alt="product flower" />
                    </figure>
                </div>
            </div>
            <div className={styles['services']}>
                <h1>Services</h1>
                <hr></hr>
            </div>
        </div>
    );
}

export default Content;