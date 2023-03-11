import { faBed, faCar, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from "./header.module.css";
import Search from '../Search/Search';

const Header = ({ hideSearchbar }) => {
    return (
        <div className={styles.header}>
            <div className={hideSearchbar ? styles.headerContainer2 : styles.headerContainer}>
                <div className={styles.headerList}>
                    <div className={`${styles.listItem} ${styles.active}`}>
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className={styles.listItem}>
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className={styles.listItem}>
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car Rentals</span>
                    </div>
                    <div className={styles.listItem}>
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className={styles.listItem}>
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport Taxi</span>
                    </div>
                </div>

                {
                    !hideSearchbar && <>
                        <h2 className={styles.title}>Make your dream trip happen with Great Discount...</h2>
                        <p className={styles.description}>
                            From seaside villas to city flats – wherever you’re going, we’ve got you covered
                        </p>
                        <button className={styles.btn}>Sign in / Register</button>
                    </>
                }

                {/* search bar   component*/}

                {
                    !hideSearchbar && <Search />
                }

            </div>
        </div>
    );
};

export default Header;