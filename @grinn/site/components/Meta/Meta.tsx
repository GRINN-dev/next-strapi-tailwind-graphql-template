import Head from 'next/head';
import { FC } from 'react';

interface MetaProps {
  title: string;
  meta: { name: string; property: string; content: string }[];
}

const Meta: FC<MetaProps> = ({ title, meta }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta
          content={[meta[0].content].toString()}
          property={[meta[0].property].toString()}
          name={[meta[0].name].toString()}
        />
      </Head>
    </div>
  );
};

export default Meta;
