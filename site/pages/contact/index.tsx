import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import {
  TeamDocument,
  TeamQuery,
  TeamMemberQuery,
  useTeamMemberQuery,
} from '../../graphql';
import { client } from '../../lib/apolloClient';

const Contact: NextPage<TeamQuery, TeamMemberQuery> = ({ teams }) => {
  const teamMembers = useTeamMemberQuery({});
  const imageSrc =
    'https://i.pravatar.cc/300' ||
    `https://localhost:1337/${teamMembers?.data?.teamMembers?.data[0].attributes?.avatar?.data[0].attributes?.url}`;
  return (
    <div className='px-4 py-12 space-y-2 bg-white sm:px-8 lg:py-24 max-w-7xl'>
      <Head>
        <title>Our team</title>
        <meta
          name={teams?.data[0]?.attributes?.teamMeta?.metaName?.toString()}
          property={teams?.data[0]?.attributes?.teamMeta?.metaProperty?.toString()}
          content={teams?.data[0]?.attributes?.teamMeta?.metaContent?.toString()}
        />
      </Head>
      <section className='flex flex-col mb-10 space-y-6'>
        <h1 className='text-3xl font-bold '>
          {teams?.data[0]?.attributes?.teamTitle}
        </h1>
        <p className='text-xl text-gray-500 '>
          {teams?.data[0]?.attributes?.teamParagraph}
        </p>
      </section>
      <section className='w-full'>
        <ul className='grid gap-24 md:grid-cols-1 lg:grid-cols-2'>
          {teamMembers.data?.teamMembers?.data.map((teamMember) => {
            return (
              <li key={teamMember.id} className='space-y-4 '>
                <div className=''>
                  <Image
                    loader={() => imageSrc}
                    src={imageSrc}
                    width={407}
                    height={280}
                    layout='fixed'
                    alt={teamMember.attributes?.avatar?.data[0]?.attributes?.alternativeText?.toString()}
                    className='object-cover space-x-2 rounded-lg shadow-lg'
                  />
                </div>

                <div className='space-y-2'>
                  <div className='space-y-1 text-lg font-medium leading-6'>
                    <h3>
                      {teamMember.attributes?.firstName}
                      <span> </span>
                      {teamMember.attributes?.lastName}
                    </h3>
                    <p className='text-indigo-600'>
                      {teamMember.attributes?.bio}
                    </p>
                  </div>

                  <ul>
                    {teamMember.attributes?.Facebook?.map((rs) => {
                      return (
                        <li key={rs?.id}>
                          <a href=''>{rs?.link}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
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
