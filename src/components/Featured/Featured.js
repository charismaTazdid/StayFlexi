import React from 'react';
import styles from "./featured.module.css";

const Featured = () => {
    return (
        <div className={styles.featured}>
            <div className={styles.featuredItem}>
                <img src="https://t-cf.bstatic.com/xdata/images/xphoto/800x640/140048441.jpg?k=efb7dd8707032901e8e32f420f47ed979610e595b118d179a43d2f19cd73877c&o=" alt="" className={styles.img} />
                <div className={styles.title}>
                    <h1>Dublin</h1>
                    <h2> beutiful property 123 </h2>
                </div>
            </div>
            <div className={styles.featuredItem}>
                <img src="https://t-cf.bstatic.com/xdata/images/xphoto/800x640/140049612.jpg?k=786e5fa86cb516adbf6e946cd3870e0d244a91622fca73c2dc895c3c202e1ee6&o=" alt="" className={styles.img} />
                <div className={styles.title}>
                    <h1>London</h1>
                    <h2> beutiful propert 423 </h2>
                </div>
            </div>
            <div className={styles.featuredItem}>
                <img src="https://t-cf.bstatic.com/xdata/images/xphoto/800x640/140049345.jpg?k=44e0ed3097d874ac91a2f8b61b259e095ce233975a62125f74271191c6de91ea&o=" alt="" className={styles.img} />
                <div className={styles.title}>
                    <h1>SwitzerLand</h1>
                    <h2> beutiful property 454 </h2>
                </div>
            </div>
        </div>
    );
};

export default Featured;