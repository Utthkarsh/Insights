"use client";
import styles from "./home.module.css";
import Image from "next/image";
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}> Capture your life. </h1>
        <p className={styles.desc}> Login in and blog!</p>
        <div className={styles.buttons}>
          <button className={styles.button}> Learn More</button>
          <button className={styles.button}> Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImg} />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/hero.gif" className={styles.heroImg} fill />
      </div>
    </div>
  );
};
export default Home;
