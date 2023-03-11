import styles from './propertyList.module.css';

const PropertyList = () => {
    return (
        <div className={styles.propertyList}>
            <div className={styles.item}>
                <img src="https://r-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=" alt="" className={styles.img} />
                <div className={styles.title}>
                    <h1>Hotels</h1>
                    <h2>3423 Hotels</h2>
                </div>
            </div>
            <div className={styles.item}>
                <img src="https://q-xx.bstatic.com/xdata/images/hotel/300x240/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=" alt="" className={styles.img} />
                <div className={styles.title}>
                    <h1>Apertments</h1>
                    <h2>63 Apertments</h2>
                </div>
            </div>
            <div className={styles.item}>
                <img src="https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=" alt="" className={styles.img} />
                <div className={styles.title}>
                    <h1>Resorts</h1>
                    <h2>4545 Resorts</h2>
                </div>
            </div>
            <div className={styles.item}>
                <img src="https://r-xx.bstatic.com/xdata/images/hotel/300x240/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=" alt="" className={styles.img} />
                <div className={styles.title}>
                    <h1>Villas</h1>
                    <h2>455 Villas</h2>
                </div>
            </div>
            <div className={styles.item}>
                <img src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450074.jpeg?k=7039b03a94f3b99262c4b3054b0edcbbb91e9dade85b6efc880d45288a06c126&o=" alt="" className={styles.img} />
                <div className={styles.title}>
                    <h1>Cottages</h1>
                    <h2>798 Cottages</h2>
                </div>
            </div>
        </div>
    );
};

export default PropertyList;