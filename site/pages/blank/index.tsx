import { GetStaticProps, NextPage } from 'next';
import Meta from '../../components/Meta/Meta';
import { Testimony } from '../../components/Testimony';
import {
  GetDynamicZoneDataDocument,
  GetDynamicZoneDataQuery,
} from '../../graphql';
import { client } from '../../lib';

const Blank: NextPage<GetDynamicZoneDataQuery> = ({ pages }) => {
  return (
    <div>
      {/* <p>Test</p> */}
      {pages?.data?.map((p) => {
        return (
          <>
            <div key={p.id}>
              <Meta
                title={
                  p?.attributes?.pageMeta?.metaName
                    ? p?.attributes?.pageMeta?.metaName
                    : ''
                }
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
                        avatar={
                          dyn?.testimonyAvatar?.data?.attributes?.url
                            ? `http://localhost:1337${dyn?.testimonyAvatar?.data?.attributes?.url}`
                            : `https://picsum.photos/200/300`
                        }
                        companyLogo={
                          dyn?.companyLogo?.data?.attributes?.url
                            ? `http://localhost:1337${dyn?.companyLogo?.data?.attributes?.url}`
                            : ''
                        }
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

export const getStaticProps: GetStaticProps<GetDynamicZoneDataQuery> =
  async ({}) => {
    const { data, error } = await client.query<GetDynamicZoneDataQuery>({
      query: GetDynamicZoneDataDocument,
    });
    return {
      props: data,
    };
  };
