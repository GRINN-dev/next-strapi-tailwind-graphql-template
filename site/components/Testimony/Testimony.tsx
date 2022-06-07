import { FC } from 'react';
import Image from 'next/image';

export interface TestimonyProps {
  companyName: string;
  job: string;
  testimonyContent: string;
  firstName: string;
  lastName: string;
  avatar?: any;
  companyLogo?: any;
}

export const Testimony: FC<TestimonyProps> = ({
  companyName,
  job,
  testimonyContent,
  firstName,
  lastName,
  avatar,
  companyLogo,
}) => {
  return (
    <section className='py-12 m-10 overflow-hidden bg-gray-50 md:py-20 lg:py-24'>
      <div className='relative flex flex-col items-center px-4 mx-auto space-y-4 max-w-7xl sm:px-6 lg:px-8'>
        <div className='absolute object-center w-16 h-6 -m-4'>
          <Image
            src={companyLogo}
            alt={companyName}
            layout='fill'
            className='absolute'
          />
        </div>
        <p>{testimonyContent}</p>
        <div className='flex items-center justify-center text-sm'>
          <Image
            src={avatar}
            alt={lastName}
            className='items-center object-contain mx-2 rounded-full'
            layout='fixed'
            width={20}
            height={20}
          />
          <span className='relative ml-2'>
            {firstName} {''}
            {lastName} <span className='ml-1'>/</span>
          </span>
          <div className='text-gray-400'>
            <span className='ml-1'>{job}, </span>
            <span className=''>{companyName}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimony;
