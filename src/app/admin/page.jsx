import AdminPostForm from "@/components/adminPostForm/adminPostForm";
import AdminPosts from "@/components/adminPosts/adminPosts";
import AdminUserForm from "@/components/adminUserForm/adminUserForm";
import AdminUsers from "@/components/adminUsers/adminUsers";
import { auth } from "@/lib/auth";
import { Suspense } from "react";
import styles from "./admin.module.css"
const adminPage = async ()=>{
    const session = await auth()
    return (
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <Suspense fallback={<div>Loading...</div>}>
              <AdminPosts></AdminPosts>
            </Suspense>
          </div>
          <div className={styles.col}>
            <AdminPostForm userId={session.user.id} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            <Suspense fallback={<div>Loading...</div>}>
              <AdminUsers></AdminUsers>
            </Suspense>
          </div>
          <div className={styles.col}>
            <AdminUserForm  />
          </div>
        </div>
      </div>
    );
}

export default adminPage;