import { Meta, Story } from '@storybook/react';
import Testimony from './Testimony';
import { TestimonyProps } from './types';
import obole from '../../public/obole.png';
import logo_ninon from '../../public/logo_ninon.png';

export default {
  title: 'Component/Testimony',
  component: Testimony,
} as Meta;

const Template: Story<TestimonyProps> = () => {
  return (
    <Testimony
      companyName={'Grinn'}
      companyLogo={obole}
      job={'Web dev'}
      testimonyContent={
        '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis"'
      }
      firstName={'Ninon'}
      lastName={'Denormandie'}
      avatar={logo_ninon}
    />
  );
};

export const TestimonyExample = Template.bind({});
