import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Featured from "../../components/Featured/Featured";
import styles from "./home.module.css";
import PropertyList from '../../components/PropertyList/PropertyList';
import BestRated from '../../components/BestRated/BestRated';
import MailList from '../../components/MailList/MailList';
import Footer from '../../components/Footer/Footer';


const Home = () => {
    return (
        <div >
            <Navbar />
            <Header />

            <div className={styles.homeContainer}>
                <h1 className={styles.title}>Travel around The World</h1>
                <Featured />
                <h1 className={styles.title}>Browse by property type</h1>
                <PropertyList />
                <h1 className={styles.title}>Homes guests love</h1>
                <BestRated />
                <MailList />
                <Footer />
            </div>
        </div>
    );
};

export default Home;