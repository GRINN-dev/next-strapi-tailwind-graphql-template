import { Meta, Story } from "@storybook/react";
import { FooterPropsExample } from "../../lib";
import { Footer, FooterProps } from ".";

export default {
  title: "Component/Footer",
  component: Footer,
} as Meta;

const Template: Story<FooterProps> = () => {
  return <Footer {...FooterPropsExample} />;
};

export const FooterExample = Template.bind({});
