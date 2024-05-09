import styles from "./footer.module.css"
const Footer = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.logo}>UKottali </div>
        <div className={styles.text}>
          Creative thoguhts agency 🤖All rights reserved 
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
