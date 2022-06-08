import Image from 'next/image';
import { FC } from 'react';

interface HeroProps {
  title?: string;
  description?: string;
  image?: any;
  buttonTitle?: string;
}

export const Hero: FC<HeroProps> = ({
  title,
  buttonTitle,
  description,
  image,
}) => {
  return (
    <div className='relative bg-gray-200'>
      <div className='h-56 sm:h-72 md:absolute md:right-0 md:h-full md:w-1/2'>
        <Image
          src={
            image ||
            'https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&blend=6366F1&sat=-100&blend-mode=multiply'
          }
          alt={''}
          layout='fill'
          className='right-0 object-cover w-full h-full'
        />
      </div>
      <div className='relative px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-16'>
        <div className='flex flex-col space-y-2 md:w-1/2 '>
          <h1 className='mt-2 text-3xl font-extrabold tracking-tight text-black sm:text-4xl'>
            {title}
          </h1>
          <p className='text-lg text-gray-600'>{description}</p>
          <button
            type='button'
            className='items-center justify-center px-5 py-2 my-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md w-max hover:bg-gray-50'
          >
            {buttonTitle}
          </button>
        </div>
      </div>
    </div>
  );
};
