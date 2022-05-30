import { FC } from 'react';

interface TestimonyProps {
  companyName: string;
  job: string;
  testimonyContent: string;
  firstName: string;
  lastName: string;
  avatar?: any;
  companyLogo?: any;
}

export const Testimony: FC = ({}) => {
  return (
    <div>
      <div>companyLogo + company name</div>
      <p>contenu témoignage</p>
      <div className='flex'>
        <span>image</span>
        <span>prénom nom</span>
        <span>emploi</span>
        <span>entreprise</span>
      </div>
    </div>
  );
};

export default Testimony;
