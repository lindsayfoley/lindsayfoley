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
        using SASS.
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
            including Selfridges, Disney, Charlotte Tilbury, The Times and most
            recently BT where I joined as a Lead Engineer.
          </p>
          <p>
            I've also worked on many projects from CRO initiatives to improving
            web performance, to building component libraries.
          </p>
        </div>
        <div>
          <dl>
            <dt>Web Development Skills</dt>
            <dd>HTML, CSS, SCSS, Styled JSX, Styled Components, Material UI</dd>
            <dd>
              Typescript, JavaScript, Dust.js, jQuery. A bit of PHP, VB &amp;
              SQL
            </dd>
            <dd>Node &amp; Express</dd>
            <dd>React and Redux</dd>
            <dd>
              Experience with GraphQL, Apollo Client and consuming REST APIs
            </dd>
            <dd>Next.js, CRA, Gatsby frameworks</dd>
            <dd>A11y best practices</dd>
            <dd>Jest, Enzyme, Mocha, Cypress, React Testing Library</dd>
            <dd>Foundation &amp; Bootstrap</dd>
            <dd>A/B &amp; MVT testing</dd>
            <dd>Web performance</dd>
            <dd>Git &amp; SVN</dd>
            <dd>Building responsive HTML emails</dd>
            <dd>Tooling; Webpack, NPM, Babel, Gulp, Storybook</dd>
            <dd>CMS; Contentful, Drupal, Wordpress, Squarespace, AEM</dd>
            <dd>
              Graphic design, UI/UX design principles &amp; usability testing
            </dd>
            <dd>Qualified Digital Marketer</dd>
            <dd>SEO best practices</dd>
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
