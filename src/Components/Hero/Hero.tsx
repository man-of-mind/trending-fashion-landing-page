import React from "react";
import styles from './Hero.module.scss';

const Hero = () => {
    return(
        <section className={styles['hero']}>
            <article>
                <h1>About Us</h1>
                <hr></hr>
                <p style={{paddingBottom: '20px', paddingTop: '10px'}}>She is a product manager who has seen numerous projects from 
                    inception to completion. I am presently at WhoGoHost as the product manager. </p>
                <p>Here are some of the projects ive overseen so far in my career. 
                    Here are some of the projects ive overseen so far in my career. 
                    Here are some of the projects ive overseen so far in my career.</p>
            </article>
            <div className={styles['fig']}></div>
        </section>
    );
}

export default Hero;