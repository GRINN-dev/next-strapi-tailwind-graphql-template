import { FC } from 'react';
import { StatisticsProps } from './types';

export const Statistics: FC<StatisticsProps> = ({ title, content, image }) => {
  return (
    <div>
      <h1 className='text-3xl font-extrabold text-gray-900 sm:text-4xl'>
        {title}
      </h1>

      <div className='pb-12 mt-10 bg-white sm:pb-16'>
        <div className='relative'>
          <div className='absolute inset-0 h-1/2' />
          <div className='relative max-w-5xl px-4 mx-auto sm:px-6 lg:px-8'>
            <div className='max-w-4xl mx-auto'>
              <dl className='bg-white rounded-lg shadow-lg sm:grid sm:grid-cols-1'>
                {content?.map((c, i) => {
                  return (
                    <div
                      key={i}
                      className='flex flex-col justify-center p-6 text-center '
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
