import { FC } from 'react';

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
    <div>
      <div>
        {companyLogo} {companyName}
      </div>
      <p>{testimonyContent}</p>
      <div className='flex'>
        <span>{avatar}</span>
        <span>
          {firstName} {lastName}{' '}
        </span>
        <span>{job}</span>
        <span>{companyName}</span>
      </div>
    </div>
  );
};

export default Testimony;
