import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MarkEmailUnreadOutlinedIcon from "@mui/icons-material/MarkEmailUnreadOutlined";
import ReplitLogo from "../../static/replit.png";
import CPLogo from "../../static/cp.png";
import JSLogo from "../../static/jsLogo.png";
import TutorialImg from "../../static/tutorial.jpg";
import Yash from "../../static/yash.jpg";
import boy from "../../static/boy.jpg";
import Image from "next/image";

const styles = {
  wrapper: "flex[1.2] min-w-[10rem] max-w-[30rem] h-screen p-[2rem] ",
  accentedButton:
    " flex items-center justify-center cursor-pointer rounded-full text-white bg-[#191919] hover:bg-[#0F0F0F] text-sm my-[2rem] py-[.6rem] px-[.4rem]",
  searchBar:
    "flex items-center justify-center rounded-full border h-[2.6rem] px-[1rem]",
  searchInput: "border-none outline-none bg-none w-full",
  title: "font-medium",
  authorContainer: "flex flex-col mt-[2rem] mb-[1rem] ",
  authorProfileImageContainer:
    "w-[5rem] h-[5rem] rounded-full overflow-hidden cursor-pointer",
  authorName: "font-semibold mb-[.2rem] mt-[1rem]",
  authorFollowing: "text-[#787878]",
  authorActions: "flex gap-[0.6rem] my-[1rem]",
  actionButton:
    "text-white bg-[#1A8917] hover:bg-[#146D12] rounded-full py-[.4rem] px-[.6rem] text-sm",
    recommendationContainer:"",
  recommendationAuthorImageContainer:
    "rounded-full overflow-hidden h-[2rem] w-[2rem]",
  recommendationAuthorContainer: "flex gap-[0.6rem] items-center ",
  recommendationAuthorName: "text-sm",
  recommendationTitle: "font-bold",
  recommendationThumbnailContainer:
    "flex flex-1 justify-center items-center h-[4rem] w-[4rem] ",
  recommendationThumbnail: "object-cover",
  articleContentWrapper:
    "flex justify-between items-center cursor-pointer my-[1rem]",
  articleContent: "flex-[4]",
};

const Recommendations = ({ post, author }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.accentedButton}>Get unlimited Access</div>
      <div className={styles.searchBar}>
        <SearchOutlinedIcon />
        <input
          placeholder="Search"
          type="text"
          className={styles.searchInput}
        />
      </div>

      <div className={styles.authorContainer}>
        <div className={styles.authorProfileImageContainer}>
          <Image
            src={`https://res.cloudinary.com/demo/image/fetch/${author?.data?.imageUrl}`}
            height={100}
            width={100}
            alt="author"
          />
        </div>
        <div className={styles.authorName}>{author?.data?.name}</div>
        <div className={styles.authorFollowing}>
          {author?.data?.followerCount} followers
        </div>
        <div className={styles.authorActions}>
          <button className={styles.actionButton}>Follow</button>
          <button className={styles.actionButton}>
            <MarkEmailUnreadOutlinedIcon />
          </button>
        </div>
      </div>

      <div className={styles.recommendationContainer}>
        <div className={styles.title}>More from Medium</div>
        <div className={styles.articlesContainer}>
          {recommendedPost.map((post) => (
            <div className={styles.articleContentWrapper}>
              <div className={styles.articleContent}>
                <div className={styles.recommendationAuthorContainer}>
                  <div className={styles.recommendationAuthorImageContainer}>
                    <Image
                      src={post.author.image}
                      height={100}
                      width={100}
                      alt="sug"
                    />
                  </div>
                  <div className={styles.recommendationAuthorName}>
                    {post.author.name}
                  </div>
                </div>
                <div className={styles.recommendationTitle}>{post.title}</div>
              </div>
              <div className={styles.recommendationThumbnailContainer}>
                <Image
                  className={styles.recommendationThumbnail}
                  src={post.image}
                  height={100}
                  width={100}
                  alt="recomm"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommendations;

const recommendedPost = [
  {
    title: "What can you do with Replit",
    image: ReplitLogo,
    author: {
      name: "Mark Schaefer",
      image: boy,
    },
  },
  {
    title: "Neglecting Legacy Code?",
    image: JSLogo,
    author: {
      name: "Cory Doctorow",
      image: Yash,
    },
  },
  {
    title: "It’s a Potential Gold Mine of Learning",
    image: TutorialImg,
    author: {
      name: "CleverProgramer",
      image: CPLogo,
    },
  },
];
