import { GetStaticProps, NextPage } from 'next';
import { TeamDocument, TeamQuery } from '../../graphql';
import { client } from '../../lib/apolloClient';

const Contact: NextPage<TeamQuery> = ({ teams }) => {
  return (
    <div>
      <h1>{teams?.data[0]?.attributes?.teamTitle}</h1>
      <p>{teams?.data[0]?.attributes?.teamParagraph}</p>
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
