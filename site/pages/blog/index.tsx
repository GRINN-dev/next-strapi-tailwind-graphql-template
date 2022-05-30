import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { BlogDocument, BlogQuery, useArticlesQuery } from '../../graphql';
import { client } from '../../lib/apolloClient';
import article1 from '../../public/article1.jpg';

const Blog: NextPage<BlogQuery> = ({ blog }) => {
  const articles = useArticlesQuery({});

  const readingTime = (text: any) => {
    const wordPerMinute = 200;
    const words = text.split(/\s/g).length;
    const min = words / wordPerMinute;
    const readTime = Math.ceil(min);
    return `${readTime} minute read`;
  };

  const post = 'This is a very very very very very long test post';
  readingTime(post);
  console.log(readingTime(post));
  //returns 1 min !

  const blogPost = readingTime(
    articles?.data?.blogArticles?.data[0]?.attributes?.articleContent
  );

  return (
    <div>
      <div>
        <Head>
          <title>{blog?.data?.attributes?.blogTitle}</title>
        </Head>
      </div>
      <section className='flex flex-col items-center justify-between flex-1 p-6 my-6 overflow-hidden bg-white md:mx-28'>
        <h1 className='text-3xl font-medium'>
          {blog?.data?.attributes?.blogTitle}
        </h1>
        <h2 className='my-5'>{blog?.data?.attributes?.blogIntroduction}</h2>
      </section>
      <div className='grid grid-cols-1 gap-6 mx-auto md:grid-cols-3'>
        {articles?.data?.blogArticles?.data?.map((article) => {
          return (
            <div
              key={article.id}
              className='mx-4 bg-white rounded-lg shadow-lg'
            >
              <div className='flex flex-col justify-between my-2'>
                <div className='w-full mb-6 overflow-hidden rounded-t-lg'>
                  <Image
                    src={article1}
                    alt='article-pic'
                    layout='responsive'
                    className='object-cover w-full '
                  />
                </div>
                <div className='mx-4'>
                  <h4 className='mb-2 text-indigo-600 cursor-pointer hover:underline'>
                    {article?.attributes?.pageTitle}
                  </h4>
                  <h3 className='mb-3 text-xl font-medium cursor-pointer'>
                    {article?.attributes?.articleTitle}
                  </h3>
                  <article
                    id='article'
                    className='mb-8 text-gray-600 cursor-pointer'
                  >
                    <p>{article?.attributes?.articleContent}</p>
                  </article>
                  <div className='flex space-x-2'>
                    <div className='w-12 h-12 '>
                      <Image
                        src={
                          article?.attributes?.team_member?.data?.attributes
                            ?.avatar?.data?.attributes?.url
                            ? `http://localhost:1337${article?.attributes?.team_member?.data?.attributes?.avatar?.data?.attributes?.url}`
                            : `https://picsum.photos/200/300`
                        }
                        alt={
                          article?.attributes?.team_member?.data?.attributes
                            ?.avatar?.data?.attributes?.alternativeText || ''
                        }
                        layout='responsive'
                        width={1}
                        height={1}
                        className='rounded-full cursor-pointer'
                      />
                    </div>
                    <div className='flex flex-col'>
                      <span className='font-medium cursor-pointer hover:underline '>
                        {article?.attributes?.articleAuthor}
                      </span>
                      <span className='text-xs text-gray-400'>
                        {article?.attributes?.publishingDate}
                        <p>
                          <span id='time'>{blogPost}</span> minute read
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

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
