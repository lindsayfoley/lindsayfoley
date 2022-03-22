import { AppProps } from "next/app";
import { Layout } from "components/templates";
import "../public/styles/global.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
