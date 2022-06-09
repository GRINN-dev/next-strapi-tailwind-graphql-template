import { Meta, Story } from '@storybook/react';
import { Spotlight } from './Spotlight';

export default {
  title: 'Component/Spotlight',
  component: Spotlight,
} as Meta;

const Template: Story = () => {
  return <Spotlight />;
};

export const SpotlightExample = Template.bind({});
