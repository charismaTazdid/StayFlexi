import { useState } from 'react';
import { DateRange } from 'react-date-range';
import { faBed, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from "date-fns";
import styles from "./search.module.css";

const Search = () => {

    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    });

    const [showCalender, setShowCalender] = useState(false);
    const [date, setDate] = useState([{
        statDate: new Date(),
        endDate: new Date(),
        key: "selection"
    }]);

    const handleCounter = (name, opration) => {
        setOptions((previousValue) => {
            return {
                ...previousValue, [name]: opration === "inc" ? options[name] + 1 : options[name] - 1
            }
        });
    };

    return (
        <div className={styles.searchContainer}>
            <div className={styles.searchItem}>
                <FontAwesomeIcon icon={faBed} className={styles.searchbarIcon} />
                <input type="text" placeholder='Where are you going?' className={styles.searchInput} />
            </div>

            {/* start and end date */}
            <div className={styles.searchItem} >
                <FontAwesomeIcon icon={faCalendarDays} className={styles.searchbarIcon} />
                <span className={styles.searchText} onClick={() => setShowCalender(!showCalender)}>
                    {format(date[0].statDate, "MM/dd/yyyy")} to {format(date[0].endDate, "MM/dd/yyyy")}
                </span>

                {
                    showCalender && <DateRange
                        editableDateInputs={true}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className={styles.date}
                    />
                }
            </div>

            {/* person and room option  */}
            <div className={styles.searchItem}>
                <FontAwesomeIcon icon={faPerson} className={styles.searchbarIcon} />
                <span className={styles.searchText} onClick={() => setOpenOptions(!openOptions)}>
                    {options.adult} person • {options.children} children • {options.room} room
                </span>
                {/* options */}
                {
                    openOptions &&
                    <div className={styles.options}>
                        <div className={styles.optionItem}>
                            <span className={styles.optionText}> Adult</span>
                            <div className={styles.optionsCounter}>
                                <button className={styles.counterBtn} disabled={options.adult <= 1} onClick={() => handleCounter("adult", "dec")} > ‒ </button>
                                <span className={styles.counterNumber}> {options.adult} </span>
                                <button className={styles.counterBtn} onClick={() => handleCounter("adult", "inc")} > + </button>
                            </div>

                        </div>

                        <div className={styles.optionItem}>
                            <span className={styles.optionText}> Children</span>
                            <div className={styles.optionsCounter}>
                                <button className={styles.counterBtn} disabled={options.children < 1} onClick={() => handleCounter("children", "dec")} > ‒ </button>
                                <span className={styles.counterNumber}> {options.children} </span>
                                <button className={styles.counterBtn} onClick={() => handleCounter("children", "inc")} > + </button>
                            </div>

                        </div>
                        <div className={styles.optionItem}>
                            <span className={styles.optionText}> Room</span>
                            <div className={styles.optionsCounter}>
                                <button className={styles.counterBtn} disabled={options.room <= 1} onClick={() => handleCounter("room", "dec")} > ‒ </button>
                                <span className={styles.counterNumber}> {options.room} </span>
                                <button className={styles.counterBtn} onClick={() => handleCounter("room", "inc")} > + </button>
                            </div>

                        </div>
                    </div>
                }
            </div>

            {/* search buttonn  */}
            <div className={styles.searchItem}>
                <button className={styles.searchBtn}> SEARCH</button>
            </div>
        </div>
    );
};

export default Search;