import { VFC } from "react";
import Head from "next/head";
import { Nav } from "components/atoms";
import { Layout } from "components/templates";
import { Scampi } from "components/molecules/drawings";

const ErrorPage: VFC = () => (
  <Layout>
    <Head>
      <title>Uh-oh that page doesn't exist</title>
    </Head>
    <header>
      <h1 itemProp="name">
        <a href="/">Soz Try Again</a>
      </h1>
    </header>
    <main>
      <p>Oh no, that page you requested doesn't exist.</p>
      <p>
        On the plus side, here's a nice illustration of my cat Scampi that I've
        been trying to incorporate into this site.
      </p>
      <Scampi />
      <Nav
        links={[
          { link: "/about", cta: "about me" },
          { link: "/portfolio", cta: "View my work" },
        ]}
      />
    </main>
  </Layout>
);

export default ErrorPage;
