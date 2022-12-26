import { useContext } from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import PostCard from "../components/PostCard";
import Suggestion from "../components/Suggestion";
import { MediumContext } from "../context/MediumContext";

const styles = {
  wrapper: "mx-auto flex flex-col  ",
  main: "flex justify-center my-6 ",
  container: "flex-1 max-w-6xl ml-10",
  postList:
    "flex flex-col gap-3 p-2 md:p-6 md:gap-6 sm:grid-clos-2 lg:grid-clos-3 ",
    suggestion:"sticky top-0 flex-start"
};

export default function Home() {
  const { posts, users } = useContext(MediumContext);

  return (
    <div className={styles.wrapper}>
      <Header />
      <Banner />
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.postList}>
            {posts.map((post) => (
              <PostCard post={post} key={post.id} />
            ))}
          </div>
        </div>
        <Suggestion className={styles.suggestion}/>
        </div>
    </div>
  );
}
