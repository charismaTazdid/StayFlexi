import { format } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-date-range";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./hotlelList.module.css";


const HotelList = () => {
    const location = useLocation();

    // will add Optional Chening later
    const [destination, setDestination] = useState(location.state.destination)
    const [date, setDate] = useState(location.state.date)
    const [options, setOptions] = useState(location.state.options)

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
                            <label style={styles.label} htmlFor="">Destination</label>
                            <input style={styles.input} type="text" placeholder={destination} />
                        </div>
                        <div className={styles.item}>
                            <label htmlFor="">Check in Date</label>
                            <span>
                                {`${format(date[0]?.startDate, "MM/dd/yyyy")} to ${format(date[0]?.endDate, "MM/dd/yyyy")}`}
                            </span>

                            <DateRange
                                onChange={(item) => setDate([item.selection])}
                                minDate={new Date()}
                                ranges={date}
                            />

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