import { FC } from 'react';

export interface NewsletterProps {
  title?: string;
  description?: string;
  inputLabel?: string;
  inputPlaceholder?: string;
  submitLabel?: string;
  checkboxLabel?: string;
}

export const Newsletter: FC<NewsletterProps> = ({
  title,
  description,
  inputLabel,
  inputPlaceholder,
  submitLabel,
  checkboxLabel,
}) => {
  return (
    <div className='mx-10 my-4 bg-indigo-700 rounded-lg'>
      <div className='max-w-2xl px-4 py-10 mx-auto text-center sm:py-16 sm:px-6 lg:px-8'>
        <h1 className='text-3xl font-extrabold text-white sm:text-4xl'>
          {title}
        </h1>
        <h2 className='mt-4 mb-8 text-lg leading-6 text-indigo-200'>
          {description}
        </h2>
        <div className='flex-col justify-center mx-2 mb-6 space-x-2 space-y-2 md:flex-row'>
          <label className='text-base text-white'>
            {inputLabel}
            <input
              type='text'
              placeholder={inputPlaceholder}
              className='inline-flex items-center justify-center w-full px-5 py-2 ml-2 text-base font-medium text-indigo-600 bg-white border border-transparent rounded-md sm:w-auto '
            />
          </label>
          <button
            type='submit'
            className='px-5 py-2 text-base text-white bg-indigo-500 rounded-md'
          >
            {submitLabel}
          </button>
        </div>
        <div className='flex items-center justify-center'>
          <label className='m-2'>
            {checkboxLabel}
            <input type='checkbox' className='w-4 h-4 mx-2' />
          </label>
        </div>
      </div>
    </div>
  );
};
