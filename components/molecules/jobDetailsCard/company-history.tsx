import { CompanyDetails } from "./types";

export const Companies: CompanyDetails[] = [
  {
    id: "bt",
    companyName: "BT",
    description: (
      <>
        <p>
          I led multiple squads working on a variety of new sites for BT &amp;
          EE.
        </p>
        <p>
          <span itemProp="keywords">
            React, TypeScript, NextJs, React Testing Library.
          </span>
        </p>
      </>
    ),
    link: "https://www.bt.com/",
  },
  {
    id: "times",
    companyName: "The Times",
    description: (
      <>
        <p>
          I helped build a new onboarding journey using{" "}
          <span itemProp="keywords">TypeScript &amp; React</span>.
        </p>
        <p>I also optimised the performance of the store.</p>
      </>
    ),
    link: "https://www.thetimes.co.uk/",
  },
  {
    id: "ct",
    companyName: "Charlotte Tilbury",
    description: (
      <>
        <p>
          I worked on a{" "}
          <span itemProp="keywords">
            React app written in TypeScript, using Redux &amp; SCSS.{" "}
          </span>
        </p>
        <p>Also used Jest &amp; Enzyme, Storybook, Contentful CMS.</p>
      </>
    ),
    link: "https://www.charlottetilbury.com/uk",
  },
  {
    id: "travel-blog",
    companyName: "Come Fly With Lindsay",
    description: (
      <>
        <p>My travel blog which launched in Nov 2016.</p>
        <p>
          Recently updated to React written in{" "}
          <span itemProp="keywords">
            TypeScript, using SCSS &amp; styled JSX
          </span>
        </p>
      </>
    ),
    link: "https://comeflywithlindsay.com",
  },
  {
    id: "disney",
    companyName: "Disney Holidays",
    description: (
      <p>
        I made this app adaptive/responsive, utilising{" "}
        <span itemProp="keywords">
          RESS principles. Writing most of the JavaScript, jQuery, CSS &amp;
          setting up e2e tests
        </span>
        .
      </p>
    ),
    link: "http://www.disneyholidays.co.uk",
  },
  {
    id: "jia",
    companyName: "Jesus In Action",
    description: (
      <>
        <p>
          This website underwent a complete refresh in order to modernise it.
        </p>
        <p>
          It was written in{" "}
          <span itemProp="keywords">HTML, jQuery and CSS</span>.
        </p>
      </>
    ),
    link: "http://jesusinaction.org.uk",
  },
  {
    id: "perfume",
    companyName: "The Perfume Mistress",
    description: (
      <p>
        This one is on Squarespace as my client needed a transactional site, it
        has bespoke <span itemProp="keywords">CSS &amp; JavaScript</span> to
        customise the Hayden template.
      </p>
    ),
    link: "https://www.theperfumemistress.com",
  },
  {
    id: "dashwood",
    companyName: "Hayes Dashwood",
    description: (
      <p>
        I redesigned and coded this website using{" "}
        <span itemProp="keywords">
          {" "}
          HTML, CSS, jQuery &amp; the Google Maps API
        </span>
        .
      </p>
    ),
    link: "http://www.hayesdashwood.org.uk",
  },
  {
    id: "selfridges",
    companyName: "Selfridges",
    description: (
      <>
        <p>I worked on the Selfridges 2014 site redesign.</p>
        <p>
          I migrated and{" "}
          <span itemProp="keywords">
            {" "}
            developed new responsive content &amp; created HTML emails
          </span>
          .
        </p>
      </>
    ),
    cta: "View past work ›",
    link: "https://web.archive.org/web/20150707135538/http://www.selfridges.com/content/article/paddington",
  },
  {
    id: "hopelands",
    companyName: "Hopelands Cattery",
    description: (
      <p>
        I designed and developed this site using{" "}
        <span itemProp="keywords">
          {" "}
          HTML, CSS, jQuery, Slick Slider &amp; the Google Maps API
        </span>
        .
      </p>
    ),
    link: "https://web.archive.org/web/20190625163932/http://hopelandscattery.com/",
  },
  {
    id: "theyer",
    companyName: "Theyer Fitness",
    description: (
      <p>
        My first piece of freelance work! This site was revamped in{" "}
        <span itemProp="dateCreated">2011</span>, it was given a new design
        &amp; developed in <span itemProp="keywords">HTML5 &amp; CSS3</span>.
      </p>
    ),
    link: "https://web.archive.org/web/20180810084130/http://theyerfitness.co.uk/",
  },
  {
    id: "whitestuff",
    companyName: "White Stuff",
    description: (
      <p>
        My first ever dev role! I created web content and weekly{" "}
        <span itemProp="keywords">
          {" "}
          HTML emails using XHTML4, CSS &amp; jQuery
        </span>
        .
      </p>
    ),
    cta: "View past work ›",
    link: "http://web.archive.org/web/20140511040437/http://www.whitestuff.com/jobs",
  },
];
