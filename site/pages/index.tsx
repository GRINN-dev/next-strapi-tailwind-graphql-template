import type { GetStaticProps, NextPage } from "next";
import { Layout } from "../components";
import { GetLayoutDocument, GetLayoutQuery } from "../graphql";
import { client } from "../lib/apolloClient";
import { FooterPropsExample, HeaderPropsExample } from "../lib/fakeDatas";

const Home: NextPage<GetLayoutQuery> = ({ layout }) => {
  console.log(layout);

  return (
    <Layout header={HeaderPropsExample} footer={FooterPropsExample}>
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
