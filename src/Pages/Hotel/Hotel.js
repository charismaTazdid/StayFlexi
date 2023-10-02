import React from 'react';
import styles from "./hotel.module.css";
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import MailList from "../../components/MailList/MailList.js";
import Footer from "../../components/Footer/Footer.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Hotel = () => {

    const [slideIndex, setSlideIndex] = useState(0);
    const [openSlide, setOpenSlide] = useState(false);

    const handleSlide = (imageIndex) => {
        setSlideIndex(imageIndex);
        setOpenSlide(!openSlide)
    }

    const handleArrowMove = (direction) => {
        let newSlideNumber;

        if (direction === "left") {
            newSlideNumber = slideIndex === 0 ? (hotelImages.length - 1) : slideIndex - 1;
        }
        else {
            newSlideNumber = slideIndex === (hotelImages.length - 1) ? 0 : slideIndex + 1;
        }
        setSlideIndex(newSlideNumber);
    };

    const hotelImages = [
        {
            src: "https://upload.wikimedia.org/wikipedia/commons/1/1e/AIMCO_apartment_interior.jpg"
        },
        {
            src: "https://img.zumpercdn.com/522450011/1280x960?auto=format"
        },
        {
            src: "https://upload.wikimedia.org/wikipedia/commons/1/1e/AIMCO_apartment_interior.jpg"
        },
        {
            src: "https://mediavault.point2.com/p2h/listing/e1f3/4d7b/aba2/a5faefb3838214d52468/nwm_large.jpg"
        },
        {
            src: "https://img.zumpercdn.com/522450011/1280x960?auto=format"
        },
        {
            src: "https://photos2.theblueground.com/736/pg21664-o-1ed198bc-6468-f176-bdf9-a47b896b2672.jpg?quality=low"
        },

    ]
    return (
        <div>
            <Navbar />
            <Header hideSearchbar />

            <div className={styles.hotelContainer}>

                {/* Image Slider */}
                {
                    openSlide &&
                    <div className={styles.slieder}>
                        <FontAwesomeIcon icon={faCircleXmark} className={styles.cancleSlider} onClick={() => setOpenSlide(false)} />
                        <FontAwesomeIcon icon={faCircleArrowLeft} className={styles.arrow} onClick={() => handleArrowMove("left")} />
                        <div className={styles.sliderWrapper}>
                            <img src={hotelImages[slideIndex].src} alt="" className={styles.sliderImg} />
                        </div>
                        <FontAwesomeIcon icon={faCircleArrowRight} className={styles.arrow} onClick={() => handleArrowMove("right")} />
                    </div>
                }

                <div className={styles.hotelWrapper}>
                    <button className={styles.bookNowBtn}>Take it Now!</button>
                    <h1 className={styles.title}>
                        Grand Hotel
                    </h1>
                    <div className={styles.address}>
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>Cntral Plaza, New York</span>
                    </div>
                    <span className={styles.distance}>
                        Excellent Location - 400 miter from Center City
                    </span>
                    <span className={styles.priceHighlight}>
                        Book a stay over $344 at this property and get a free airport taxi!
                    </span>

                    {/* Hotel Feature Images */}
                    <div className={styles.images}>
                        {
                            hotelImages.map((photo, index) => (
                                <div className={styles.imagesWrapper}>
                                    <img src={photo.src} className={styles.hotelImge} onClick={() => handleSlide(index)} alt="" />
                                </div>
                            ))
                        }
                    </div>
                    {/* Details */}
                    <div className={styles.hotelDetials}>
                        <div className={styles.detailsText}>
                            <h1 className={styles.title}> Stay on the heart of New york </h1>
                            <p className={styles.description}>
                                With pool views, Chambers Serviced Suites Kuala Lumpur is set in Kuala Lumpur and has a restaurant, a lift, bar, garden, outdoor fireplace and children's playground.
                                Located in Kuala Lumpur, a few steps from Berjaya Times Square and less than 1 km from Starhill Gallery, Excellent Serviced Suite Kl provides accommodation with free WiFi, air conditioning, a rooftop...
                                Located in Kuala Lumpur, a few steps from Berjaya Times Square and less than 1 km from Starhill Gallery, Excellent Serviced Suite Kl provides accommodation with free WiFi, air conditioning, a rooftop...
                            </p>
                        </div>

                        <div className={styles.detailsPrice}>
                            <h1>Perfect for a night stay!</h1>
                            <span>
                                Located in Kuala Lumpur, a few steps from Berjaya Times Square and less than 1 km from Starhill Gallery, Excellent Serviced Suite Kl provides accommodation with free WiFi, air conditioning
                            </span>
                            <h2>
                                <b> $845 </b> (2 Night)
                            </h2>
                            <button className={styles.reserveBtn}> Reserve Or Book Now </button>
                        </div>
                    </div>
                </div>
                <MailList />
                <Footer />
            </div>
        </div>
    );
};

export default Hotel;