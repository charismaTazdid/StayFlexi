import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./hotlelList.module.css";


const HotelList = () => {
    return (
        <div>
            <Navbar />
            <Header hideSearchbar />

            {/* Hotel list Search and result */}
            <div className={styles.listContainer}>
                <div className={styles.listWrapper}>
                    <div className={styles.listSearch}>
                        <h1 className={styles.title}>Search</h1>
                        <div className={styles.item}>
                            <label htmlFor="">Destination</label>
                            <input type="text" />
                        </div>
                        <div className={styles.item}>
                            <label htmlFor="">Check in Date</label>

                        </div>
                    </div>
                    <div className={styles.listResult}>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelList;