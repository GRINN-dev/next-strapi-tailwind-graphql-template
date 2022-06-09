import { Meta, Story } from "@storybook/react";
import { HeaderPropsExample } from "../../lib";
import { Header, HeaderProps } from ".";

export default {
  title: "Component/Header",
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = () => {
  return <Header {...HeaderPropsExample} />;
};

export const HeaderExample = Template.bind({});
