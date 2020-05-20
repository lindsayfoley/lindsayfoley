import React from "react";

const Intro: React.FunctionComponent = () => {
  return (
    <>
      <h2 itemProp="description">
        <span itemProp="jobTitle">Web Developer</span> based in <span itemProp="workLocation">London</span>
      </h2>
      <img
        src="/images/hp_hero.png"
        alt="A neat and tidy desk housing all the essentials including a cat mug full of english breakfast tea, biscuits and an iMac"
      />
    </>
  );
}

export default Intro;
