import Image from "next/image";
import React from "react";
import Yash from "../../static/yash.jpg";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import BookmarksOutlinedIcon from "@mui/icons-material/BookmarksOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import banner from "../../static/banner.png";

const styles = {
  wrapper: "flex items-center justify-center flex-[3] border-l border-r  ",
  content: "h-screen w-full p-[2rem]",
  postHeaderContainer: "flex justify-between mt-[2.2rem] mb-[1.2rem]",
  authorContainer: "flex gap-[1rem] ",
  authorName: "cursor-pointer",
  authorProfileImageContainer:
    "w-[3rem] h-[3rem] gird center rounded-full overflow-hidden cursor-pointer",
  image: "object-cover",
  column: "flex flex-1 flex-col justify-center",
  postDetails: "flex gap-[.2rem] text-[#787878]",
  listenButton:
    "flex items-center gap-[.2rem] text-[#1A8917] hover:text-[#146D12] cursor-pointer",
  socialContainer: "flex gap-[1rem] text-[#787878]  cursor-pointer",
  socialButton: "hover:text-black",
  space: "w-[.5rem]",
  bannerContainer: "h-[25rem] w-full grid center overflow-hidden mt-[1rem] mb-[2rem] ",
  articleMainContainer: "flex flex-col gap-[1rem]",
  title: "font-bold text-3xl",
  subtitle: "font-mediumSerifItalic text-[1.4rem] text-[#292929]",
  articleText: "font-mediumSerif text-[1.4rem] text-[#292929]",
};

const ArticleMain = ({ post, author }) => {
  console.log(post ,author)
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.postHeaderContainer}>
          <div className={styles.authorContainer}>
            <div className={styles.authorProfileImageContainer}>
              <Image
                src={`https://res.cloudinary.com/demo/image/fetch/${author?.data?.imageUrl}`}
                height={100}
                width={100}
                alt="author"
              />
            </div>
            <div className={styles.column}>
              <div className={styles.authorName}> {author?.data?.name}</div>
              <div className={styles.postDetails}>
                <span>
                  {" "}
                  {new Date(post?.data?.postLength).toLocaleString("en-US", {
                    day: "numeric",
                    month: "short",
                  })}
                  · {post?.data?.postLength} min read·
                </span>
                <span className={styles.listenButton}>
                  <PlayArrowRoundedIcon /> Listen
                </span>
              </div>
            </div>
          </div>
          <div className={styles.socialContainer}>
            <div className={styles.socialButton}>
              {" "}
              <FacebookRoundedIcon />
            </div>
            <div className={styles.socialButton}>
              {" "}
              <LinkedInIcon />
            </div>
            <div className={styles.socialButton}>
              {" "}
              <TwitterIcon />
            </div>
            <div className={styles.socialButton}>
              {" "}
              <LinkOutlinedIcon />
            </div>
            <div className={styles.space}></div>
            <div className={styles.socialButton}>
              <BookmarksOutlinedIcon />
            </div>
            <div className={styles.socialButton}>
              <MoreHorizOutlinedIcon />
            </div>
          </div>
        </div>
        <div className={styles.articleMainContainer}>
          <div className={styles.bannerContainer}>
            <Image
              src={`https://res.cloudinary.com/demo/image/fetch/${post?.data?.bannerImage}`}
              className={styles.image}
              alt="banner"
              width={900}
              height={1000}
            />
          </div>
          <h1 className={styles.title}>{post?.data?.title}</h1>
          <h4 className={styles.subtitle}>
            <div>
              {author?.data?.name},{" "}
              {new Date(post?.data?.postLength).toLocaleString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </div>
            <div>{post?.data?.brief}</div>
          </h4>
          <div className={styles.articleText}>{post?.data?.body}</div>
        </div>
      </div>
    </div>
  );
};

export default ArticleMain;
