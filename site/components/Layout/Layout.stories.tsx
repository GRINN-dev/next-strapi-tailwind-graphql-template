import { Meta, Story } from "@storybook/react";
import { FooterPropsExample, HeaderPropsExample } from "../../lib";
import { Layout, LayoutProps } from ".";

export default {
  title: "Component/Layout",
  component: Layout,
} as Meta;

const LayoutPropsExample: LayoutProps = {
  header: HeaderPropsExample,
  footer: FooterPropsExample,
};

const Template: Story<LayoutProps> = () => {
  return <Layout {...LayoutPropsExample} />;
};

export const LayoutExample = Template.bind({});
