import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { client } from "../lib/apolloClient";
import { ApolloProvider } from "@apollo/client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>next-strapi-tailwind-graphql-template</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}

export default MyApp;