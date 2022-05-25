import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { BlogDocument, BlogQuery } from '../../graphql';
import { client } from '../../lib/apolloClient';

const Blog: NextPage<BlogQuery> = ({ blog }) => {
  return (
    <div>
      <Head>
        <title>{blog?.data?.attributes?.blogTitle}</title>
      </Head>
    </div>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps<BlogQuery> = async ({}) => {
  const { data, error } = await client.query<BlogQuery>({
    query: BlogDocument,
  });
  return {
    props: data,
  };
};
