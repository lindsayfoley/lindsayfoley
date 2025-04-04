import { ReactNode } from "react";
import Head from "next/head";
import Script from "next/script";
import { Footer } from "components/organisms";
import { Logo } from "components/assets/svgs/logo";
import { useRouter } from "next/dist/client/router";
import styles from "./layout.module.scss";

const Layout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="freelancer, freelance web developer, frontend developer, frontend engineer, web development, London, React, TypeScript, JavaScript, SCSS, web design, interactive websites, ecommerce, Lindsay Foley"
        />
        <link
          rel="canonical"
          href={`https://lindsayfoley.co.uk${router.asPath.split("?")[0]}`}
        />
      </Head>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-69DWCVH1KC"
      />
      <Script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-69DWCVH1KC');`,
        }}
      />
      <a href="/">
        <Logo className={styles.logo} />
      </a>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
