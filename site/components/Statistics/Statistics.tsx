import { FC } from 'react';

export interface StatisticsProps {
  title?: string;
  content?: { descriptionTitle?: string; descriptionDetail?: string }[];
  image?: any;
}

export const Statistics: FC<StatisticsProps> = ({ title, content, image }) => {
  return (
    <div>
      <h1 className='text-3xl font-extrabold text-gray-900 sm:text-4xl'>
        {title}
      </h1>

      <div className='pb-12 mt-10 bg-white sm:pb-16'>
        <div className='relative'>
          <div className='absolute inset-0 h-1/2' />
          <div className='relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
            <div className='max-w-4xl mx-auto'>
              <dl className='bg-white rounded-lg shadow-lg sm:grid sm:grid-cols-3'>
                {content?.map((c, i) => {
                  return (
                    <div
                      key={i}
                      className='flex flex-col justify-center p-6 text-center border-b border-gray-100 sm:border-0 sm:border-r'
                    >
                      <div>
                        <dd className='text-5xl font-extrabold text-indigo-600'>
                          {c.descriptionTitle}
                        </dd>
                        <dt className='mt-2 text-lg font-medium leading-6 text-gray-500 '>
                          {c.descriptionDetail}
                        </dt>
                      </div>
                    </div>
                  );
                })}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
