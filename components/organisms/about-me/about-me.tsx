import { FC } from "react";
import { Coding } from "components/molecules/drawings";
import { Nav } from "components/atoms";
import styles from "./about-me.module.scss";

const AboutMe: FC = () => (
  <>
    <header>
      <h1 itemProp="name">
        <a href="/">All About Me</a>
      </h1>
    </header>
    <main className={styles.main}>
      <p>👋 Welcome to my cosy corner of the internet!</p>
      <p>
        I've been busy sprucing up this space, constantly updating the code with
        new skills that I learn. Right now, it's a React app in Typescript,
        crafted with Next.js, and styled using SASS modules.
      </p>
      <section className={styles.skills}>
        <div>
          <h3>My Journey</h3>
          <Coding />
          <p>
            I bring over a decade of development experience in retail, travel,
            and publishing, having the privilege to contribute to companies like
            Selfridges, Disney, Charlotte Tilbury, The Times, and BT.
          </p>
          <p>
            My journey involves diving into projects from CRO initiatives to
            ramping up web performance and building UI libraries.
          </p>
          <p>
            Most recently, I've embarked on a new journey, reentering the world
            of contracting and founding my own company. It's a pleasure to
            reunite with my dedicated team at Charlotte Tilbury, where I'm
            actively involved in enhancing SEO efforts.
          </p>
        </div>
        <div>
          <dl>
            <dt>Skills Snapshot</dt>
            <dd>🏆 BT Engineering Award Winner</dd>
            <dd>👩🏽‍💻 Principal Dev experience</dd>
            <dd>⚛️ React, Redux</dd>
            <dd>🖥️ TypeScript, JavaScript, PHP, SQL</dd>
            <dd>🛠️ HTML, SCSS, Styled JSX, Styled Components, SCSS modules</dd>
            <dd>🧪 Jest, React Testing Library, Cypress, Enzyme &amp; Mocha</dd>
            <dd>💻 Node &amp; Express</dd>
            <dd>🔌 GraphQL, Apollo Client, REST clients, API consumption</dd>
            <dd>🔧 Git, Webpack, NPM, Babel, Gulp, Storybook</dd>
            <dd>🧰 Next.js, CRA, Gatsby</dd>
            <dd>📈 Performance optimisation</dd>
            <dd>🌎 A11y best practices</dd>
            <dd>🏗️ Foundation &amp; Bootstrap</dd>
            <dd>🔬 A/B &amp; MVT testing</dd>
            <dd>📧 Responsive HTML emails</dd>
            <dd>🌐 CMS: Contentful, Drupal, Wordpress, AEM, Squarespace</dd>
            <dd>
              ‍🎨 Graphic design, UI/UX design principles &amp; usability
              testing
            </dd>
            <dd>🎓 Qualified Digital Marketer</dd>
            <dd>🔍 SEO best practices</dd>
            <dd>🚀 Eager for innovative projects</dd>
          </dl>
        </div>
      </section>
      <Nav
        links={[
          { link: "/portfolio", cta: "View my work" },
          { link: "/", cta: "Back to home" },
        ]}
      />
    </main>
  </>
);

export default AboutMe;
