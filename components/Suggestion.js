import React from "react";

const styles = {
  wrapper: "flex flex-col max-w-[30rem] md:auto mr-[4rem] mt-6 sticky top-0 ",
  heading: "font-bold text-sm text-[#292929]",
  suggestionContainer:
    "grid grid-cols-3 gap-3 pt-5 pb-8 text-[#757575] border-b border-[#E6E6E6]",
  suggestion:
    " flex items-center justify-center text-[0.75rem] font-[500] py-[6px] px-[16px]  border  cursor-pointer",
  about: "flex flex-col text-wrap mt-4 ",
  aboutFirst:"flex  items-center space-x-8  text-[#757575]  text-sm  font-[400]	 pt-2 px-3 cursor-pointer"
};

const Suggestion = () => {
  return (
    <div className={styles.wrapper}>
      <h4 className={styles.heading}>DISCOVER MORE OF WHAT MATTERS TO YOU</h4>

      <div className={styles.suggestionContainer}>
        <div className={styles.suggestion}>Programing</div>
        <div className={styles.suggestion}>Data Science</div>
        <div className={styles.suggestion}>Technology</div>
        <div className={styles.suggestion}>Self Improvement</div>
        <div className={styles.suggestion}>Writing</div>
        <div className={styles.suggestion}>RelationShips</div>
        <div className={styles.suggestion}>Machine Learning</div>
        <div className={styles.suggestion}>Productivity</div>
        <div className={styles.suggestion}>Politics</div>
      </div>

      <div className={styles.about}>
        <div className={styles.aboutFirst}>
          <div>Help </div>
          <div> Status </div>
          <div> Writers </div>
          <div> Blog </div>
          <div> Careers </div>
          <div>Privacy</div>
        </div>
        <div className={styles.aboutFirst}>
          <div>Terms</div>
          <div>About</div>
          <div>Text to speech</div>
        </div>
      </div>
    </div>
  );
};

export default Suggestion;
