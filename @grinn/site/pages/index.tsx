import type { GetStaticProps, NextPage } from "next";
import { Layout } from "../components";
import {
  GetLayoutDocument,
  GetLayoutQuery,
  LayoutEntityResponse,
} from "../graphql";
import { client, footerContent, headerContent } from "../lib";

const Home: NextPage<GetLayoutQuery> = ({ layout }) => {
  return (
    <Layout
      header={headerContent(layout as LayoutEntityResponse)}
      footer={footerContent(layout as LayoutEntityResponse)}
    >
      <h1 className="text-2xl">Hello world</h1>
      <div className="h-96" />
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<GetLayoutQuery> = async ({}) => {
  const { data: layout, error } = await client.query<GetLayoutQuery>({
    query: GetLayoutDocument,
  });
  return {
    props: layout,
    // revalidate: 60,
  };
};
