import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>next-strapi-tailwind-graphql-template</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <span className="text-accent-900 text-2xl">Hello world</span>
      </main>
    </div>
  );
};

export default Home;
