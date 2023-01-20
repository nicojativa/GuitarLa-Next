import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children, title = "", description = "" }) {
  return (
    <>
      <Head>
        <title>{`${title} | GuitarLa`}</title>
        <meta name="description" content={description} />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
}
