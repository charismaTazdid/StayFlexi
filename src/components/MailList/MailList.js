import styles from './mailList.module.css';

const MailList = () => {
    return (
        <div className={styles.mailList}>
            <h1 className={styles.title}>Save time, save money!</h1>
            <span className={styles.description}>Sign up and we'll send the best deals to you </span>
            <div className={styles.mailInput}>
                <input type="text" placeholder='example@gmail.com' />
                <button className={styles.mailBtn}> Subscribe </button>
            </div>
        </div>
    );
};

export default MailList;