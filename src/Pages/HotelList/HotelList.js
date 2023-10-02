import { format } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-date-range";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import SearchItems from "../../components/SearchItems/SearchItems";
import styles from "./hotlelList.module.css";


const HotelList = () => {
    const location = useLocation();

    // will add Optional Chening later
    const [destination, setDestination] = useState(location.state.destination || "")
    const [date, setDate] = useState(location.state.date || "");
    const [showCalender, setShowCalender] = useState(false);
    const [options, setOptions] = useState(location.state.options || "")

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
                            <span onClick={() => setShowCalender(!showCalender)}>
                                {`${format(date[0]?.startDate, "MM/dd/yyyy")} to ${format(date[0]?.endDate, "MM/dd/yyyy")}`}
                            </span>

                            {
                                showCalender && <DateRange
                                    onChange={(item) => setDate([item.selection])}
                                    minDate={new Date()}
                                    ranges={date}
                                />
                            }

                        </div>
                        {/* Options */}
                        <div className={styles.item}>
                            <label htmlFor=""> Options </label>

                            <div className={styles.options}>

                                <div className={styles.optionItem}>
                                    <span className={styles.optionText}> Min Price <small> Per Night</small>  </span>
                                    <input type="number" className={styles.optionInput} />
                                </div>

                                <div className={styles.optionItem}>
                                    <span className={styles.optionText}> Max Price <small> Per Night</small> </span>
                                    <input type="number" className={styles.optionInput} />
                                </div>

                                <div className={styles.optionItem}>
                                    <span className={styles.optionText}> Adult  </span>
                                    <input type="number" className={styles.optionInput} placeholder={options.adult} min={0} />
                                </div>

                                <div className={styles.optionItem}>
                                    <span className={styles.optionText}> Children </span>
                                    <input type="number" className={styles.optionInput} placeholder={options.children} min={0} />
                                </div>

                                <div className={styles.optionItem}>
                                    <span className={styles.optionText}> Room </span>
                                    <input type="number" className={styles.optionInput} placeholder={options.room} min={1} />
                                </div>

                            </div>
                        </div>
                        <button className={styles.btn}>Search</button>
                    </div>


                    <div className={styles.listResult}>
                        {/* Have Created another Component for Readability */}
                        <SearchItems />
                        <SearchItems />
                        <SearchItems />
                        <SearchItems />
                        <SearchItems />
                        <SearchItems />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelList;