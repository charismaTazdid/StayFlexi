import styles from './bestRated.module.css';

const BestRated = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <img className={styles.img} src="https://t-cf.bstatic.com/xdata/images/hotel/square600/121399207.webp?k=b0e7119a0ba3354de23997d3698aac0296822fd58a590d83ddbb372f8af887a9&o=&s=1" alt="" />
                <span className={styles.name}>  Apertotla Stare Matio </span>
                <span className={styles.city}> Spain </span>
                <span className={styles.price}>  Starting from $150 </span>
                <div className={styles.rating}>
                    <button>9.5</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className={styles.item}>
                <img className={styles.img} src="https://t-cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1" alt="" />
                <span className={styles.name}>  Apertotla Stare Matio </span>
                <span className={styles.city}> Spain </span>
                <span className={styles.price}>  Starting from $150 </span>
                <div className={styles.rating}>
                    <button>9.5</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className={styles.item}>
                <img className={styles.img} src="https://t-cf.bstatic.com/xdata/images/hotel/square600/123801934.webp?k=27073a18101dd5a4eefc76251f7d476be72e19ed03e98819f2d94667dd60f31a&o=&s=1" alt="" />
                <span className={styles.name}>  Apertotla Stare Matio </span>
                <span className={styles.city}> Spain </span>
                <span className={styles.price}>  Starting from $150 </span>
                <div className={styles.rating}>
                    <button>9.5</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className={styles.item}>
                <img className={styles.img} src="https://t-cf.bstatic.com/xdata/images/hotel/square600/77765518.webp?k=4a20e0410272be25ec6c1ba975f25ed42c154bbcd8ffbd8c41346d2e636badee&o=&s=1" alt="" />
                <span className={styles.name}>  Apertotla Stare Matio </span>
                <span className={styles.city}> Spain </span>
                <span className={styles.price}>  Starting from $150 </span>
                <div className={styles.rating}>
                    <button>9.5</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div>
    );
};

export default BestRated;