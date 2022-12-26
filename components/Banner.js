import Image from "next/image";
import React from "react";
import banner from "../static/banner.png";

const styles = {
  accentedButton:
    "bg-[#191919] hover:bg-[#0F0F0F]  rounded-full text-white px-10 py-2 font-semibold text-lg mt-4 ",
  content: `max-w-7xl flex flex-1 items-center justify-between pt-5`,
  wrapper:
    "h-max-[25rem] flex items-center justify-center bg-[#FCC017] border-y border-black",
};

const Banner = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className="space-y-7 px-12  flex-[3]">
          <div>
            <h1 className="max-w-xl text-[#080808] font-mediumSerif text-[6rem]">
              Stay curious.
            </h1>
            <h3 className="text-2xl text-[#292929] mb-4 text-gray-900 ">
              Discover stories, thinking, and expertise <br />
              from writers on any topic.
            </h3>
          </div>
          <button className={styles.accentedButton}>Start Reading</button>
        </div>

        <Image
          className="hidden h-[25.8rem] w-full md:inline-flex object-contain  flex-1"
          alt="banner"
          src={banner}
          width={500}
          height={400}
        />
      </div>
    </div>
  );
};

export default Banner;
