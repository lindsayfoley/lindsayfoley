import React from "react";

function Intro() {
  return (
    <main id="homepage">
      <h2 itemprop="description">
        <span itemprop="jobTitle">Web Developer</span> based in{" "}
        <span itemprop="workLocation">London</span>
      </h2>
      <img
        src="app/images/hp_hero.png"
        alt="A neat and tidy desk housing all the essentials including a cat mug full of english breakfast tea, biscuits and an iMac"
      />
    </main>
  );
}

export default Intro;
