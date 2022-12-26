import Image from "next/image";
import React from "react";
import medium from "../static/medium.png";

const styles = {
  wrapper: "flex justify-center gap-10 p-4 bg-[#FCC017]",
  content: "flex-1 flex max-w-7xl justify-between gap-10 px-4 ",
  logoContainer: "flex items-center flex-start",
  logo: "object-contain cursor-pointer",
  navBanner: "flex  space-x-5 items-center cursor-pointer ",
  accentedButton:
    "bg-[#191919] hover:bg-[#0F0F0F] rounded-full text-white px-5 py-2",
};
const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <Image className={styles.logo} src={medium} width={200} height={40} alt='logo' />
        </div>
        <div className={styles.navBanner}>
          <div>Our Story</div>
          <div>Membership</div>
          <div>Write</div>
          <div>Sign In</div>
          <div className={styles.accentedButton}>Get Started</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
