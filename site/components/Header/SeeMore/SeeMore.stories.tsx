import { Meta, Story } from "@storybook/react";
import { SeeMore } from ".";
import { SeeMoreProps } from "..";
import { HeaderPropsExample } from "../../../lib";

export default {
  title: "Component/Header/SeeMore",
  component: SeeMore,
} as Meta;

const Template: Story<SeeMoreProps> = () => {
  return (
    <div className="relative">
      <SeeMore {...HeaderPropsExample.seeMore} />
    </div>
  );
};

export const SeeMoreExample = Template.bind({});
