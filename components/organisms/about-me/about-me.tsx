import { VFC } from "react";
import { Coding } from "components/molecules/drawings";
import { Nav } from "components/atoms";
import styles from "./about-me.module.scss";

const AboutMe: VFC = () => (
  <>
    <header>
      <h1 itemProp="name">
        <a href="/">All About Me</a>
      </h1>
    </header>
    <main className={styles.main}>
      <p>
        I’ve been busy working on my little corner of the internet for quite a
        while so thank you for stopping by!
      </p>
      <p>
        If you've been here before the site may look unchanged but I do update
        it every so often utilising new skills that I learn. Currently it's a
        React app written in Typescript, on the Next.js framework and styled
        using SASS modules.
      </p>
      <section className={styles.skills}>
        <div>
          <h3>My experience</h3>
          <Coding />
          <p>
            I've worked in a variety of sectors including retail, travel and
            publishing and have been developing professionally for 10+ years.
          </p>
          <p>
            In that time, I've been lucky to work for some notable companies
            including Selfridges, Disney, Charlotte Tilbury, The Times and BT.
            Most recently I joined ClearScore as a Senior Frontend Developer.
          </p>
          <p>
            I've also worked on many projects, from CRO initiatives to improving
            web performance and building UI libraries for the wider business to
            consume.
          </p>
        </div>
        <div>
          <dl>
            <dt>Web Development Skills</dt>
            <dd>🏆 Received an engineering recognition award at BT in 2021</dd>
            <dd>⚛️ React, Redux</dd>
            <dd>🌐 Typescript, JavaScript, PHP, SQL</dd>
            <dd>
              🛠️ HTML, SCSS, Styled JSX, Styled Components, CSS/SCSS modules
            </dd>
            <dd>🧪 Jest, React Testing Library, Cypress, Enzyme &amp; Mocha</dd>
            <dd>💻 Node &amp; Express</dd>
            <dd>🔌 GraphQL, Apollo Client, REST clients, consuming APIs</dd>
            <dd>🔧 Git, Webpack, NPM, Babel, Gulp, Storybook</dd>
            <dd>🧰 Next.js, CRA, Gatsby frameworks</dd>
            <dd>👩🏽‍💻 Principle Dev experience, suppporting multiple squads</dd>
            <dd>🌎 A11y best practices</dd>
            <dd>🏗️ Foundation &amp; Bootstrap</dd>
            <dd>🔬 A/B &amp; MVT testing</dd>
            <dd>📧 Building responsive HTML emails</dd>
            <dd>✏️ CMS; Contentful, Drupal, Wordpress, AEM, Squarespace</dd>
            <dd>
              ‍🎨 Graphic design, UI/UX design principles &amp; usability
              testing
            </dd>
            <dd>🎓 Qualified Digital Marketer</dd>
            <dd>🔍 SEO best practices</dd>
          </dl>
        </div>
      </section>
      <Nav
        links={[
          { link: "/portfolio", cta: "View my work" },
          { link: "/", cta: "back to home" },
        ]}
      />
    </main>
  </>
);

export default AboutMe;
