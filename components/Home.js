import React from "react";
import "../public/styles/_home.scss";

function Home() {
  return (
    <section id="home">
      <header itemscope itemtype="http://schema.org/Person">
        <h1 itemprop="name">Lindsay Foley</h1>
        <h2 itemprop="description">
          <span itemprop="jobTitle">Web Developer</span> based in{" "}
          <span itemprop="workLocation">London</span>
        </h2>
      </header>
      <main id="homepage">
        <img
          src="app/images/hp_hero.png"
          alt="A neat and tidy desk housing all the essentials including a cat mug full of english breakfast tea, biscuits and an iMac"
        />
        <nav>
          <a href="portfolio">
            <button>View my work</button>
          </a>
          <a itemprop="url" href="about">
            <button>About me</button>
          </a>
        </nav>
      </main>
    </section>
  );
}

export default Home;
