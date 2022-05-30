import { Meta, Story } from '@storybook/react';
import Testimony, { TestimonyProps } from './Testimony';

export default {
  title: 'Component/Testimony',
  component: Testimony,
} as Meta;

const Template: Story<TestimonyProps> = () => {
  return (
    <Testimony
      companyName={''}
      job={''}
      testimonyContent={''}
      firstName={''}
      lastName={''}
    />
  );
};

export const HeaderExample = Template.bind({});
