import React from "react";
import FactsCard from "../Cards/FactsCard";
import styles from './Content.module.scss';
import Service from "./Service";
import Member from "./Member";
import ProductFlower from '../../Assets/Images/ProductFlower.svg';
import CompanyFlower from '../../Assets/Images/CompanyFlower.svg';
import { membersPictures, membersMobilePictures, useWindowDimensions } from "../utils";
import { ReactComponent as FullStarIcon } from "../../Assets/Icons/FullStar.svg";
import { ReactComponent as HalfStarIcon } from "../../Assets/Icons/HalfStar.svg";
import { ReactComponent as ArrowLeftIcon } from "../../Assets/Icons/ArrowLeft.svg";
import { ReactComponent as ArrowRightIcon } from "../../Assets/Icons/ArrowRight.svg";
import CEO from "../../Assets/Images/ceo.svg";
import FlowerGallery1 from "../../Assets/Images/FlowerA1.svg";
import FlowerGallery2 from "../../Assets/Images/FlowerB3.svg";



const Content = () => {
    const membersList = membersPictures.map((icon, index) => 
        <Member key={index} member={icon.image} name="Kerry Lorem" role="BUSINESS DEVELOPER" about="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa in etiam blandit eleifend ultricies urna nunc donec ultrices."/>
    );

    const mobileMembersList = membersMobilePictures.map((member, index) => 
        <Member key={index} member={member.image} name="Kerry Lorem" role="BUSINESS DEVELOPER" about={member.about}/>
    );

    const { width } = useWindowDimensions();
    let cardWidth = "";
    let cardHeight = "";
    let fontSize = "";
    if (width > 687 && width <= 1100) {
        cardWidth = "105px";
        cardHeight = "150px";
        fontSize = "30px";
    } else {
        cardWidth = "185px";
        cardHeight = "200px";
        fontSize = "40px";
    }

    return (
        <div className={styles['content']}>
            <h1>FACTS &#38; FIGURES</h1>
            <hr></hr>
            <section className={styles['facts-card']}>
                <FactsCard bgColor="#D35796" total="15+" category="CLIENTS" width={cardWidth} height={cardHeight} fontSize={fontSize}/>
                <FactsCard bgColor="#9256B7" total="1k" category="AWARDS" width={cardWidth} height={cardHeight} fontSize={fontSize}/>
                <FactsCard bgColor="#578388" total="10k" category="PROJECTS" width={cardWidth} height={cardHeight} fontSize={fontSize}/>
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
                </div>
                <div className={styles['grid-container-2']}>
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
                <section className={styles['service-grid']}>
                    <Service category="WEB DESIGN" detail="We help your businesses achieve outstanding solutions by applying industry standard tools and solutions"/>
                    <Service category="WEB DESIGN" detail="We help your businesses achieve outstanding solutions by applying industry standard tools and solutions"/>
                    <Service category="GRAPHICS DESIGN" detail="We help your businesses achieve outstanding solutions by applying industry standard tools and solutions"/>
                    <Service category="GRAPHICS DESIGN" detail="We help your businesses achieve outstanding solutions by applying industry standard tools and solutions"/>
                </section>
            </div>
            <div className={styles['gallery']}>
                <h1>Gallery</h1>
                <hr></hr>
                <section className={styles['section-one']}>
                    <figure>
                        <img src={FlowerGallery1} alt="flower gallery" />
                    </figure>
                    <figure>
                        <img src={FlowerGallery1} alt="flower gallery" />
                    </figure>
                    <figure>
                        <img src={FlowerGallery1} alt="flower gallery" />
                    </figure>
                    <figure>
                        <img src={FlowerGallery1} alt="flower gallery" />
                    </figure>
                </section>
                <section className={styles['section-two']}>
                    <figure>
                        <img src={FlowerGallery2} alt="flower gallery" />
                    </figure>
                    <figure>
                        <img src={FlowerGallery2} alt="flower gallery" />
                    </figure>
                    <figure>
                        <img src={FlowerGallery2} alt="flower gallery" />
                    </figure>
                    <figure>
                        <img src={FlowerGallery2} alt="flower gallery" />
                    </figure>
                </section>
            </div>
            <div className={styles['team-members']}>
                <h1>Our Team</h1>
                <hr></hr>
                <p>We have an impressive team of professionals
                    and seasoned business experts.
                </p>
                <div className={styles['members-grid']}>
                    {membersList}
                </div>
                <div className={styles['mobile-grid']}>
                    <div className={styles['mobile-members-grid']}>
                        {mobileMembersList}
                    </div>
                
                    <div className={styles['mobile-members-grid']}>
                        {mobileMembersList}
                    </div>
                </div>
            </div>
            <div className={styles['reviews']}>
                <h1>Cool Reviews</h1>
                <p>We have an impressive collection of outstanding products
                    for you and your family.
                </p>
                <figure>
                    <FullStarIcon />
                    <FullStarIcon />
                    <FullStarIcon />
                    <FullStarIcon />
                    <HalfStarIcon style={{paddingRight: '0'}}/>
                </figure>
                <section className={styles['ceo-review']}>
                    <ArrowLeftIcon className={styles['arrow-left']} />
                    <article>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa in etiam blandit eleifend 
                            ultricies urna nunc donec ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit. Massa in etiam blandit eleifend ultricies urna nunc donec ultrices.
                        </p>
                        <figure>
                            <img src={CEO} alt="ceo inspiro" />
                            <figcaption>
                                <span>Janet Jason</span>
                                <small>CEO Inspiro</small>
                            </figcaption>
                        </figure>
                    </article>
                    <ArrowRightIcon className={styles['arrow-right']} />
                </section>
            </div>
        </div>
    );
}

export default Content;