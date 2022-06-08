import { FC } from 'react';

interface CtaProps {
  title: string;
  onClick?: () => void;
}

export const Cta: FC<CtaProps> = ({ title }) => {
  return (
    <div>
      <button
        type='button'
        className='items-center justify-center px-5 py-2 my-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md w-max hover:bg-gray-50 hover:text-indigo-600'
      >
        {title}
      </button>
    </div>
  );
};
