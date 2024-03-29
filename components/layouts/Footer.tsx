import styles from './styles.module.css';
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <div className={`${styles.footer} mt-8`}>
        <div className={styles.footer_content}>
            <p className={`${styles.display_text} md:text-4xl`}>Display your work for others to learn and get inspired!! <br />Show the best of yourself.</p>
            <div className={styles.subscribe}>
                <button>Get Started For Free <IoIosArrowForward /></button>
                <div className={styles.get_started}>
                    <span>No subscriptions.</span><br />
                    <span>No annual fee</span>
                    <span>No Lock-ins</span>
                </div>
            </div>
            <div className={styles.gearImg}>
              <img src='/blog-banner.png' alt="blog"/>
            </div>
            <div className={`${styles.shape1} ${styles.first}`}></div>
            <div className={`${styles.shape1} ${styles.second}`}></div>
            <div className={`${styles.shape1} ${styles.third}`}></div>
            <div className={styles.shape2}></div>
        </div>
    </div>
  )
}

export default Footer