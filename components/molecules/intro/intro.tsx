import { VFC } from "react";
import { Nav } from "components/atoms";
import styles from "./intro.module.scss";

const Intro: VFC = () => (
  <section className={styles.intro}>
    <header>
      <h1 itemProp="name">
        <a href="/">Lindsay Foley</a>
      </h1>
    </header>
    <h2 itemProp="description">
      <span itemProp="jobTitle">Web Developer</span> based in{" "}
      <span itemProp="workLocation">London</span>
    </h2>
    <img
      src="/images/hp_hero.png"
      alt="A neat and tidy desk housing all the essentials including a cat mug full of english breakfast tea, biscuits and an iMac"
    />
    <Nav
      links={[
        { link: "/portfolio", cta: "View my work" },
        { link: "/about", cta: "about me" },
      ]}
    />
  </section>
);

export default Intro;
