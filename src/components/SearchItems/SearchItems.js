import React from 'react';
import styles from "./SearchItems.module.css";


const SearchItems = () => {
    return (
        <div className={styles.searchItemContainer}>

            <img src="https://t-cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1" alt="" className={styles.image} />
            <div className={styles.description}>
                <h1 className={styles.title}>Tower Street Apartment</h1>
                <span className={styles.distance}> 500m from center town </span>
                <span className={styles.taxiOption}> Free airport taxi</span>
                <span className={styles.subtitle}> Awsam Apartment with Air-Condition </span>
                <span className={styles.features}> Entire studio ⦿ 1 Bathroom ⦿ 21 squre meter full bed </span>
                <span className={styles.cancelationOption}> Free Cancelation </span>
                <span className={styles.cancelationSubtitle}> You can cancle later, so look in this great price today! </span>
            </div>
            {/* Details Container */}
            <div className={styles.detailsContainer}>
                <div className={styles.rating}>
                    <span className={styles.ratingStatus}>Excellent</span>
                    <button className={styles.ratingCount}>9.5</button>
                </div>
                <div className={styles.detailsText}>
                    <span className={styles.price}>$280</span>
                    <span className={styles.priceOption}>Includes Taxes and Other fees</span>
                    <button className={styles.availabilityBtn}>See Availability</button>
                </div>
            </div>
        </div>
    );
};

export default SearchItems;