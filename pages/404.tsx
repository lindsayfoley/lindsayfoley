import Head from "next/head";
import { Nav } from "components/atoms";
import { Scampi } from "components/molecules/drawings";

const ErrorPage = () => (
  <>
    <Head>
      <title>Oops! It seems like you've wandered off the path</title>
    </Head>
    <header>
      <h1 itemProp="name">
        <a href="/">Sorry Try Again</a>
      </h1>
    </header>
    <main>
      <p>Oops! It looks like the page you were looking for doesn't exist.</p>
      <p>
        On the bright side, here's a charming illustration of my cat, Scampi,
        that I've been eager to share with you on this site.
      </p>

      <Scampi />
      <Nav
        links={[
          { link: "/about", cta: "about me" },
          { link: "/portfolio", cta: "View my work" },
        ]}
      />
    </main>
  </>
);

export default ErrorPage;
