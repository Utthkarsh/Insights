import LoginForm from "@/components/loginForm/loginForm";
import { handleGithublogin } from "@/lib/action";
import styles from "./login.module.css"
const loginPage =  () => {
  
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <LoginForm />
        <form action={handleGithublogin}>
          <button className={styles.github}>Login with GitHub</button>
        </form>
      </div>
    </div>
  );
};

export default loginPage;
