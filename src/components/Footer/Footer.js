import React from 'react';
import styles from "./Footer.module.css";


const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.listContainer}>
                <ul className={styles.list}>
                    <li className={styles.listItem}> Countries </li>
                    <li className={styles.listItem}> Regions </li>
                    <li className={styles.listItem}> Cities </li>
                    <li className={styles.listItem}> Districts </li>
                    <li className={styles.listItem}> Airports </li>
                    <li className={styles.listItem}> Hotels </li>
                </ul>
                {/* 2nd row */}
                <ul className={styles.list}>
                    <li className={styles.listItem}> Homes </li>
                    <li className={styles.listItem}> Apartments </li>
                    <li className={styles.listItem}> Resorts </li>
                    <li className={styles.listItem}> Villas </li>
                    <li className={styles.listItem}> B&Bs </li>
                    <li className={styles.listItem}> Guest houses </li>
                </ul>
                {/* 3rd row */}
                <ul className={styles.list}>
                    <li className={styles.listItem}> Unique places to stay </li>
                    <li className={styles.listItem}> All destinations </li>
                    <li className={styles.listItem}> All flight destinations </li>
                    <li className={styles.listItem}> Discover monthly stays </li>
                    <li className={styles.listItem}> Unpacked: Travel articles </li>
                    <li className={styles.listItem}> Seasonal and holiday deals </li>
                </ul>

                {/* 4th row */}

                <ul className={styles.list}>
                    <li className={styles.listItem}> Car hire </li>
                    <li className={styles.listItem}> Flight finder </li>
                    <li className={styles.listItem}> Restaurant reservations </li>
                    <li className={styles.listItem}> Traveller Review Awards </li>
                    <li className={styles.listItem}> Travel Communities </li>
                    <li className={styles.listItem}> Customer Service help </li>
                </ul>
                {/* 5th row */}
                <ul className={styles.list}>
                    <li className={styles.listItem}> Partner help </li>
                    <li className={styles.listItem}> Careers </li>
                    <li className={styles.listItem}> Press centre </li>
                    <li className={styles.listItem}> Safety resource centre </li>
                    <li className={styles.listItem}> Investor relations </li>
                    <li className={styles.listItem}> Partner dispute </li>
                </ul>
                {/* 6th row */}
                <ul className={styles.list}>
                    <li className={styles.listItem}> Coronavirus (COVID-19) FAQs </li>
                    <li className={styles.listItem}> Terms & Conditions </li>
                    <li className={styles.listItem}> How we work </li>
                    <li className={styles.listItem}> Corporate contact </li>
                    <li className={styles.listItem}> Privacy & Cookie Statement </li>
                    <li className={styles.listItem}> Sustainability </li>
                </ul>
            </div>

            <div className={styles.footerText}>
                Copyright © 2023  <a href="https://www.linkedin.com/in/raihan-tazdid/" target={'_blank'} rel="noreferrer" title="Click to Visit My Linkedin Profile">Raihan Tazdid</a>
            </div>
        </div>
    );
};

export default Footer;