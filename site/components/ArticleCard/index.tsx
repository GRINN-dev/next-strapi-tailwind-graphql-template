import Image from 'next/image';
import { FC } from 'react';
import { ArticleCardProps } from './types';

export const ArticleCard: FC<ArticleCardProps> = ({
  image,
  alt,
  children,
  className,
  onClick,
}) => {
  return (
    <div
      className={
        'relative overflow-hidden bg-white border border-gray-100 shadow-xl h-full rounded-xl  p-4 md:p-8 ' +
        className
      }
      onClick={onClick}
    >
      {image && (
        <div className='absolute w-20 h-20 -right-20 -bottom-10 md:w-60 md:h-60'>
          <Image
            src={image}
            alt={alt}
            layout='fill'
            className='absolute inset-0 object-contain object-top'
          />
        </div>
      )}
      {children}
    </div>
  );
};
