import { GetStaticProps, NextPage } from 'next';
import Meta from '../../components/Meta/Meta';
import { Testimony } from '../../components/Testimony';
import { DynamicZoneDocument, DynamicZoneQuery } from '../../graphql';
import { client } from '../../lib';
import Image from 'next/image';

const Blank: NextPage<DynamicZoneQuery> = ({ pages }) => {
  return (
    <div>
      <p>Test</p>
      {pages?.data?.map((p) => {
        return (
          <>
            <div key={p.id}>
              <Meta
                title={p?.attributes?.pageMeta?.metaName || ''}
                meta={[
                  {
                    content: p?.attributes?.pageMeta?.metaContent || '',
                    name: p?.attributes?.pageMeta?.metaName || '',
                    property: p?.attributes?.pageMeta?.metaProperty || '',
                  },
                ]}
              />
            </div>
            <div>
              {p?.attributes?.pageDynamicZone?.map((dyn) => {
                return (
                  <div key={dyn?.__typename}>
                    {dyn?.__typename === 'ComponentTestimonyTestimony' ? (
                      <Testimony
                        companyName={dyn?.testimonyCompanyName || ''}
                        job={dyn?.testimonyJob || ''}
                        testimonyContent={dyn?.testimonyContent || ''}
                        firstName={dyn?.testimonyFirstName || ''}
                        lastName={dyn?.testimonyLastName || ''}
                        avatar={dyn?.testimonyAvatar || ''}
                        companyLogo={dyn?.companyLogo || ''}
                      />
                    ) : (
                      ''
                    )}
                  </div>
                );
              })}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Blank;

export const getStaticProps: GetStaticProps<DynamicZoneQuery> = async ({}) => {
  const { data, error } = await client.query<DynamicZoneQuery>({
    query: DynamicZoneDocument,
  });
  return {
    props: data,
  };
};
