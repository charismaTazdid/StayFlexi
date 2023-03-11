import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./navbar.module.css";

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.navbar}>
            <div className={styles.navContainer}>
                <span className={styles.logo} onClick={() => navigate('/')}> RESERVATION </span>
                <div className={styles.navItems}>
                    <button className={styles.navBtn}>Login</button>
                    <button className={styles.navBtn}>Register</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;