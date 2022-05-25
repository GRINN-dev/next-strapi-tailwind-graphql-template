import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import {
  TeamPageDocument,
  TeamPageQuery,
  TeamMemberQuery,
  useTeamMemberQuery,
} from '../../graphql';
import { client } from '../../lib/apolloClient';

const Contact: NextPage<TeamPageQuery, TeamMemberQuery> = ({ teamPage }) => {
  const teamMembers = useTeamMemberQuery({});
  // const imageSrc = 'https://i.pravatar.cc/300';
  // || `https://localhost:1337/${teamMembers?.data?.teamMembers?.data[0].attributes?.avatar?.data[0].attributes?.url}`;
  return (
    <div className='px-4 py-10 mx-auto space-y-2 bg-white sm:px-8 lg:py-24 max-w-7xl'>
      <Head>
        <title>Our team</title>
        <meta
          name={teamPage?.data?.attributes?.teamMeta?.metaName?.toString()}
          property={teamPage?.data?.attributes?.teamMeta?.metaProperty?.toString()}
          content={teamPage?.data?.attributes?.teamMeta?.metaContent?.toString()}
        />
      </Head>
      <section className='flex flex-col mb-10 space-y-6'>
        <h1 className='text-3xl font-bold '>
          {teamPage?.data?.attributes?.teamTitle}
        </h1>
        <p className='text-xl text-gray-500 '>
          {teamPage?.data?.attributes?.teamParagraph}
        </p>
      </section>
      <section className='w-full'>
        <ul className='grid gap-24 md:grid-cols-1 lg:grid-cols-2'>
          {teamMembers.data?.teamMembers?.data.map((teamMember) => {
            return (
              <li key={teamMember.id} className='space-y-4 '>
                <div className='relative w-40 h-40'>
                  <Image
                    // loader={() => imageSrc}
                    src={
                      teamMember?.attributes?.avatar?.data?.attributes?.url
                        ? `http://localhost:1337${teamMember?.attributes?.avatar?.data?.attributes?.url}`
                        : `https://i.pravatar.cc/300`
                    }
                    layout='fill'
                    alt={
                      teamMember.attributes?.avatar?.data?.attributes
                        ?.alternativeText || ''
                    }
                    className='absolute inset-0 object-cover space-x-2 rounded-lg shadow-lg'
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
                    {teamMember.attributes?.socialNetworks?.map((rs) => {
                      return (
                        <li key={rs?.id}>
                          <a href={rs?.link?.toString()}>
                            <Image
                              src={`https://localhost:1337/rs?.icon?.data?.attributes?.url`}
                              alt={rs?.__typename}
                              width={50}
                              height={50}
                              layout='fixed'
                            />
                          </a>
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

export const getStaticProps: GetStaticProps<TeamPageQuery> = async ({}) => {
  const { data, error } = await client.query<TeamPageQuery>({
    query: TeamPageDocument,
  });
  return {
    props: data,
  };
};
