import type { GetStaticProps, NextPage } from "next";
import { TestDocument, TestQuery } from "../graphql";
import { client } from "../lib/apolloClient";

const Home: NextPage<TestQuery> = ({ tests }) => {
  return (
    <div>
      <h1 className="text-2xl">Hello world</h1>
      <p>{tests?.data[0]?.attributes?.title}</p>
    </div>
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
