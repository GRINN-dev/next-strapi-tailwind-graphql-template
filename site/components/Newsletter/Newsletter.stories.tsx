import { Meta, Story } from '@storybook/react';
import { Newsletter, NewsletterProps } from './Newsletter';

export default {
  title: 'Component/Newsletter',
  component: Newsletter,
} as Meta;

const Template: Story<NewsletterProps> = () => {
  return (
    <Newsletter
      title={"Get notified when we're launching."}
      description={
        'Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque.'
      }
      inputLabel={'Email'}
      inputPlaceholder={'Enter your email'}
      submitLabel={'Notify me'}
      checkboxLabel={'RGPD text'}
    />
  );
};

export const NewsletterExample = Template.bind({});
