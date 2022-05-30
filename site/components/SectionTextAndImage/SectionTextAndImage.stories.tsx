import { Meta, Story } from "@storybook/react";
import { SectionTextAndImage, SectionTextAndImageProps } from ".";
import { SectionTextAndImagePropsExample } from "../../lib";

export default {
  title: "Component/SectionTextAndImage",
  component: SectionTextAndImage,
} as Meta;

const Template: Story<SectionTextAndImageProps> = () => {
  return <SectionTextAndImage {...SectionTextAndImagePropsExample} />;
};

export const SectionTextAndImageExample = Template.bind({});
