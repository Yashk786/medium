import Image from "next/image";
import Link from "next/link";
import React from "react";
import SmallLogo from "../../static/SmallLogo.png";
import Yash from "../../static/yash.jpg";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import BookmarksOutlinedIcon from "@mui/icons-material/BookmarksOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";

const styles = {
  wrapper:
    "w-[5rem] h-screen flex flex-col items-center justify-between p-[1rem]  ",
  logoContainer: "cursor:pointer",
  iconsContainer:
    "flex flex-col flex-1 justify-center gap-[1.4rem] text-2xl text-[#787878] ",
  icons: "hover:cursor-pointer",
  divider: "border-b",
  profileImage: "object-cover",
  profileImageContainer:
    "rounded-full overflow-hidden w-[2.4rem] h-[2.4rem] place-items-center cursor-pointer",
};

const ReadersNav = () => {
  return (
    <div className={styles.wrapper}>
      <Link href="/">
        <div className={styles.logoContainer}>
          <Image src={SmallLogo} alt="logo" />
        </div>
      </Link>

      <div className={styles.iconsContainer}>
        <div className={styles.icons}>
          {" "}
          <HomeOutlinedIcon />
        </div>
        <div className={styles.icons}>
          {" "}
          <NotificationsNoneOutlinedIcon />
        </div>
        <div className={styles.icons}>
          {" "}
          <BookmarksOutlinedIcon />
        </div>
        <div className={styles.icons}>
          {" "}
          <FeedOutlinedIcon />
        </div>
        <div className={styles.divider} />
        <div className={styles.icons}>
          {" "}
          <RateReviewOutlinedIcon />
        </div>
      </div>

      <div className={styles.profileImageContainer}>
        <Image className={styles.profileImage} src={Yash} alt="profile" />
      </div>
    </div>
  );
};

export default ReadersNav;
