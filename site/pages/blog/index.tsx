import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { BlogDocument, BlogQuery, useArticlesQuery } from '../../graphql';
import { client } from '../../lib/apolloClient';

const Blog: NextPage<BlogQuery> = ({ blog }) => {
  const articles = useArticlesQuery({});
  return (
    <div>
      <div>
        <Head>
          <title>{blog?.data?.attributes?.blogTitle}</title>
        </Head>
      </div>
      <div className=''>
        <h1>{blog?.data?.attributes?.blogTitle}</h1>
        <h2>{blog?.data?.attributes?.blogIntroduction}</h2>
      </div>
      {articles?.data?.blogArticles?.data?.map((article) => {
        return (
          <ul key={article.id} className=''>
            <li className='flex flex-col bg-white shadow-lg'>
              <div>{article?.attributes?.articleTitle}</div>
              <div>{article?.attributes?.articleContent}</div>
            </li>
          </ul>
        );
      })}
      <div></div>
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
