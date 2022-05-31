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
    <section className='py-12 overflow-hidden bg-gray-50 md:py-20 lg:py-24'>
      <div className='relative flex flex-col items-center px-4 mx-auto space-y-4 max-w-7xl sm:px-6 lg:px-8'>
        <div className='w-10 h-6'>
          <Image src={companyLogo} alt={companyName} />
        </div>
        <p>{testimonyContent}</p>
        <div className='flex items-center justify-center text-sm'>
          <Image
            src={avatar}
            alt={lastName}
            className='items-center w-6 h-6 mx-2 rounded-full'
          />
          <span className=''>
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
