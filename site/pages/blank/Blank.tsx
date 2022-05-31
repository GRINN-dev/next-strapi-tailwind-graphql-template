import { NextPage } from 'next';
import Meta from '../../components/Meta/Meta';
import { Testimony } from '../../components/Testimony';
import { DynamicZoneQuery } from '../../graphql';

const Blank: NextPage<DynamicZoneQuery> = ({ pages }) => {
  return (
    <div>
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
                        avatar={dyn?.testimonyAvatar}
                        companyLogo={dyn?.companyLogo}
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
