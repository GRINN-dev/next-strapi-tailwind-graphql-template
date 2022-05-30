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
      <section className='flex flex-col items-center my-6 bg-pink-100 mx-28 '>
        <h1 className='text-3xl font-medium'>
          {blog?.data?.attributes?.blogTitle}
        </h1>
        <h2 className='my-5'>{blog?.data?.attributes?.blogIntroduction}</h2>
      </section>
      {articles?.data?.blogArticles?.data?.map((article) => {
        return (
          <ul key={article.id} className=''>
            <li className=''>
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
