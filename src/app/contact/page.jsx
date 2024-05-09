import styles from "./contact.module.css"
import Image from "next/image";

export const metadata = {
  title: "Contact Page",
  description: "contact description",
};

const contactPage = ()=>{
    return (
      <div>
        <div className={styles.container}>
          <div className={styles.imgContainer}>
            <Image src="/contact.png" alt="" fill className={styles.img} />
          </div> 
          
          <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <input type="text" placeholder="Name and Surname" name="" id="" />
                    <input type="text" placeholder="Email" name="" id="" />
                    <input type="text" placeholder="Phone (Optional)" name="" id="" />
                    <textarea name="" placeholder="Message" id="" cols="30" rows="10"></textarea>
                    <button>Send</button>
                </form>
            </div>
        </div>
      </div>
    );
}

export default contactPage;