import { FC } from 'react';
import Image from 'next/image';
import { Cta } from './CTA';
import { HeroProps } from './types';

export const Hero: FC<HeroProps> = ({
  title,
  buttonTitle,
  description,
  image,
}) => {
  return (
    <div className='relative m-2 bg-gray-200 rounded-md'>
      <div className='h-56 sm:h-72 md:absolute md:right-0 md:h-full md:w-1/2'>
        <Image
          src={
            image ||
            'https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&blend=6366F1&sat=-100&blend-mode=multiply'
          }
          alt={'hero-image'}
          layout='fill'
          className='right-0 object-cover w-full h-full rounded-t-md md:rounded-r-md md:rounded-l-none'
        />
      </div>
      <div className='relative px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-16'>
        <div className='flex flex-col space-y-2 md:w-1/2 '>
          <h1 className='mt-2 text-3xl font-extrabold tracking-tight text-black sm:text-4xl'>
            {title}
          </h1>
          <p className='text-lg text-gray-600'>{description || ''}</p>
          <Cta title={buttonTitle || ''} />
        </div>
      </div>
    </div>
  );
};
