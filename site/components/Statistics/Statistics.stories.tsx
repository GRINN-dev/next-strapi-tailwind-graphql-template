import { Meta, Story } from '@storybook/react';
import { Statistics, StatisticsProps } from './Statistics';

export default {
  title: 'Component/Statistics',
  component: Statistics,
} as Meta;

const statItems: StatisticsProps = {
  title: 'Lorem ipsum dolor',
  image: '',
  content: [
    {
      descriptionTitle: '77%',
      descriptionDetail: 'of internet users read blogs.',
    },
    {
      descriptionTitle: '43% ',
      descriptionDetail: 'of people admit to skimming blog posts.',
    },
    {
      descriptionTitle: '36%',
      descriptionDetail: 'of readers prefer list-based headlines.',
    },
  ],
};

const Template: Story<StatisticsProps> = () => {
  return <Statistics {...statItems} />;
};

export const StatisticsExample = Template.bind({});
