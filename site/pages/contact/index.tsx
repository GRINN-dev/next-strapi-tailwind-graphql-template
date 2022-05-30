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
import logo_linkedIn from '../../public/logo_linkedIn.svg';
import twitter from '../../public/twitter.svg';

const Contact: NextPage<TeamPageQuery, TeamMemberQuery> = ({ teamPage }) => {
  const teamMembers = useTeamMemberQuery({});

  return (
    <div className='px-4 py-10 mx-auto space-y-2 bg-white sm:px-8 lg:py-24 max-w-7xl'>
      <Head>
        <title>
          {teamPage?.data?.attributes?.teamMeta?.metaName?.toString()}
        </title>
        <meta
          name={teamPage?.data?.attributes?.teamMeta?.metaName || ''}
          property={teamPage?.data?.attributes?.teamMeta?.metaProperty || ''}
          content={teamPage?.data?.attributes?.teamMeta?.metaContent || ''}
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
                <div className='relative rounded-lg shadow-lg h-60 w-80'>
                  <Image
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
                    className='absolute inset-0 object-cover space-x-2 rounded-lg'
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
                    <div className='flex space-x-4'>
                      <div className='relative w-5 h-5'>
                        <a
                          href={
                            teamMember?.attributes?.socialNetworks
                              ? teamMember?.attributes?.socialNetworks[0]?.link?.toString()
                              : ''
                          }
                        >
                          <Image
                            src={logo_linkedIn}
                            alt={
                              teamMember?.attributes?.socialNetworks
                                ? teamMember?.attributes?.socialNetworks[0]
                                    ?.socialNetworkName || ''
                                : ''
                            }
                            layout='fill'
                          />
                        </a>
                      </div>
                      <div className='relative w-5 h-5'>
                        <a href=''>
                          <Image src={twitter} alt='twitter' layout='fill' />
                        </a>
                      </div>
                    </div>
                  </div>
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
