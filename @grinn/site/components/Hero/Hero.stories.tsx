import { Meta, Story } from '@storybook/react';
import { HeroProps } from './types';
import { Hero } from './Hero';

export default {
  title: 'Component/Hero',
  component: Hero,
} as Meta;

const Template: Story<HeroProps> = () => {
  return (
    <Hero
      title={'Data to enrich your online business'}
      description={
        'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.'
      }
      image={undefined}
      buttonTitle={'Get started'}
    />
  );
};

export const HeroExample = Template.bind({});
