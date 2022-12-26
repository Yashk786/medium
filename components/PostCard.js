import Image from "next/image";
import React, { useEffect, useState } from "react";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import Link from "next/link";
import { db } from "../firebase";
import { doc, getDoc } from "@firebase/firestore";

const styles = {
  wrapper:
    "flex max-w-[46rem] h-[12rem] items-center gap-[1rem] cursor-pointer my-3 pb-2   ",
  authorContainer: "flex gap-[0.4rem]",
  authorImageContainer:
    "grid place-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem] cursor-pointer mb-1",
  authorImage: "object-cover",
  authorName: "font-semibold text-[0.95rem] text-[#292929]",
  authorTitle: "font-bold text-[#292929] text-2xl mb-2",
  briefing: "text-[#787878] font-medium mb-1",
  detailsContainer: "flex items-center justify-between text-[#757575] mb-4  ",
  articleDetails: " my-2 text-[.8rem]  ",
  category:
    "bg-[#F2F2F2] hover:bg-gray-200 rounded-full cursor-pointer px-2 py-2",
  bookmarkContainer: "cursor-pointer",
  postDetails: "flex flex-col flex-[2.5] ",
  thumbNailContainer: "flex-1 flex justify-center  overflow-hidden ",
  thumbNail: "h-[140px] w-[190px]  object-cover",
};

const PostCard = ({ post }) => {
  const [authorData, setAuthorData] = useState(null);

  useEffect(() => {
    const getAuthorData = async () => {
      setAuthorData((await getDoc(doc(db, "users", post.data.author))).data());
    };

    getAuthorData();
  }, []);

  return (
    <Link href={`/post/${post.id}`}>
      <div className={styles.wrapper}>
        <div className={styles.postDetails}>
          <div className={styles.authorContainer}>
            <div className={styles.authorImageContainer}>
              <Image
                src={`https://res.cloudinary.com/demo/image/fetch/${authorData?.imageUrl}`}
                className={styles.authorImage}
                height={40}
                width={40}
                alt="author"
              />
            </div>
            <div className={styles.authorName}>{authorData?.name}</div>
          </div>

          <h1 className={styles.authorTitle}>{post.data.title} </h1>
          <div className={styles.briefing}>{post.data.brief}</div>

          <div className={styles.detailsContainer}>
            <span className={styles.articleDetails}>
              {new Date(post.data.postLength).toLocaleString("en-US", {
                day: "numeric",
                month: "short",
              })}{" "}
              {""}· {""} {post.data.postLength} min read {""} · {""}
              <span className={styles.category}> {post.data.category}</span>
            </span>
            <span className={styles.bookmarkContainer}>
              <BookmarkAddOutlinedIcon />
            </span>
          </div>
        </div>

        <div className={styles.thumbNailContainer}>
          <Image
            src={`https://res.cloudinary.com/demo/image/fetch/${post.data.bannerImage}`}
            width={900}
            height={1000}
            alt="thumbnail"
            className={styles.thumbNail}
          />
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
