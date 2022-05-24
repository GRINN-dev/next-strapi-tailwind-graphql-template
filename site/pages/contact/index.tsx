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
  const imageSrc = `https://localhost:1337/${teamMembers?.data?.teamMembers?.data[0].attributes?.avatar?.data[0].attributes?.url}`;
  return (
    <div>
      <Head>
        <title>Our team</title>
        <meta
          name={teams?.data[0]?.attributes?.teamMeta?.metaName?.toString()}
          property={teams?.data[0]?.attributes?.teamMeta?.metaProperty?.toString()}
          content={teams?.data[0]?.attributes?.teamMeta?.metaContent?.toString()}
        />
      </Head>
      <div className='flex flex-col space-y-2'>
        <h1 className='text-3xl text'>
          {teams?.data[0]?.attributes?.teamTitle}
        </h1>
        <p className='text-gray-500'>
          {teams?.data[0]?.attributes?.teamParagraph}
        </p>
      </div>
      <div>
        {teamMembers.data?.teamMembers?.data.map((teamMember) => {
          return (
            <div key={teamMember.id}>
              <Image
                loader={() => imageSrc}
                src={imageSrc}
                width={50}
                height={50}
                alt={teamMember.attributes?.avatar?.data[0]?.attributes?.alternativeText?.toString()}
              />
              <span>{teamMember.attributes?.firstName}</span>
              <span> </span>
              <span>{teamMember.attributes?.lastName}</span>
            </div>
          );
        })}
      </div>
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
