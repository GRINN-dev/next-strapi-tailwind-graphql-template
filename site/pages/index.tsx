import type { GetStaticProps, NextPage } from "next";
import { Layout } from "../components";
import { TestDocument, TestQuery } from "../graphql";
import { client } from "../lib/apolloClient";
import { FooterPropsExample, HeaderPropsExample } from "../lib/fakeDatas";

const Home: NextPage<TestQuery> = ({ tests }) => {
  return (
    <Layout header={HeaderPropsExample} footer={FooterPropsExample}>
      <h1 className="text-2xl">Hello world</h1>
      <p>{tests?.data[0]?.attributes?.title}</p>
      <div className="h-96" />
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<TestQuery> = async ({}) => {
  const { data, error } = await client.query<TestQuery>({
    query: TestDocument,
  });
  return {
    props: data,
    // revalidate: 60,
  };
};
