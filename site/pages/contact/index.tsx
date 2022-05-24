import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { TeamDocument, TeamQuery } from '../../graphql';
import { client } from '../../lib/apolloClient';

const Contact: NextPage<TeamQuery> = ({ teams }) => {
  return (
    <div className='flex flex-col space-y-2'>
      <Head>
        <title>Our team</title>
        <meta
          name={teams?.data[0]?.attributes?.teamMeta?.metaName?.toString()}
          property={teams?.data[0]?.attributes?.teamMeta?.metaProperty?.toString()}
          content={teams?.data[0]?.attributes?.teamMeta?.metaContent?.toString()}
        />
      </Head>
      <h1 className='text-3xl text'>{teams?.data[0]?.attributes?.teamTitle}</h1>
      <p className='text-gray-500'>
        {teams?.data[0]?.attributes?.teamParagraph}
      </p>
    </div>
  );
};

export default Contact;

export const getStaticProps: GetStaticProps<TeamQuery> = async ({}) => {
  const { data, error } = await client.query<TeamQuery>({
    query: TeamDocument,
  });
  return {
    props: data,
  };
};
