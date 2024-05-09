import Image from "next/image";
import styles from "./about.module.css"

export const metadata = {
  title: "About Page",
  description: "about description",
};
const aboutPage = ()=>{
    return (
      <div className={styles.Container}>
        <div className={styles.textContainer}>
          <h2 className={styles.subtitle}>About Insights</h2>
          <h1 className={styles.title}> Track your moments!</h1>
          <p className={styles.desc}>Detailed descriptions and photos!</p>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <h1>Front-End</h1>
              <p>Next.js</p>
            </div>
            <div className={styles.box}>
              <h1>Database</h1>
              <p>MongoDB</p>
            </div>
            <div className={styles.box}>
              <h1>Back-end</h1>
              <p>Javascript & Auth.js</p>
            </div>
          </div>
        </div>
        
        
      </div>
    );
}

export default aboutPage;