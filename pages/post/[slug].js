import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import ArticleMain from "../../components/Article/ArticleMain";
import ReadersNav from "../../components/Article/ReadersNav";
import Recommendations from "../../components/Article/Recommendations";
import { MediumContext } from "../../context/MediumContext";

const styles = {
  content: "flex  ",
 
};

const Post = () => {
  const { users, posts } = useContext(MediumContext);
  const [post, setPost] = useState([]);
  const [author, setAuthor] = useState([]);

  const router = useRouter();

  const slug = router.query.slug;

  useEffect(() => {
    if (posts.length === 0) return;
    setPost(posts.find((post) => post.id === slug));
    setAuthor(users.find((user) => user.data.email === post?.data?.author));
  }, [post]);

  return (
    <div className={styles.content}>
      <ReadersNav className={styles.nav} />
      <ArticleMain post={post} author={author} />
      <Recommendations
        post={post}
        author={author}
        className={styles.recommendations}
      />
    </div>
  );
};

export default Post;
