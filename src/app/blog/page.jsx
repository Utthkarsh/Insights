import PostCard from "@/components/postCard/postCard";
import { getPosts } from "@/lib/data";
import styles from "./blog.module.css";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog",{next:{revalidate:3600}});
  if (!res.ok) {
    throw new Error("sum iswrong");
  }
  return res.json();
};
const blogPage = async () => {
  //with api
  const posts = await getData();
  //without api
    // const posts = await getPosts()
  return (
    <div className={styles.container}>
        {posts.map((post)=>(
            <div className={styles.post} key={post.id}> 
                <PostCard post={post}/>
            </div>
        ))}
    </div>
  )
};

export default blogPage;
