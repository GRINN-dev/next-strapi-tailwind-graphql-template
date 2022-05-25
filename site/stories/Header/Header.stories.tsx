import { Meta, Story } from "@storybook/react";
import { Header, HeaderProps } from "./";
import { NewspaperIcon, OfficeBuildingIcon } from "@heroicons/react/outline";

export default {
  title: "Component/Header",
  component: Header,
} as Meta;

const HeaderPropsExample: HeaderProps = {
  header: [
    { label: "Notre histoire", href: "" },
    { label: "Qui sommes nous", href: "" },
    { label: "L'équipe", href: "" },
  ],
  seeMore: {
    subHeader: [
      {
        label: "La presse en parle",
        href: "",
        subHeader: [
          {
            label: "Le Point - 25/05/2022",
            href: "",
            icon: (
              <NewspaperIcon
                className="flex-shrink-0 w-6 h-6 text-gray-400"
                aria-hidden="true"
              />
            ),
          },
        ],
      },
      {
        label: "Nos projets",
        href: "",
        subHeader: [
          {
            label: "Projet Patrimoine",
            href: "",
            icon: (
              <OfficeBuildingIcon
                className="flex-shrink-0 w-6 h-6 text-gray-400"
                aria-hidden="true"
              />
            ),
          },
        ],
      },
    ],
    blog: [
      {
        title: "S'engager dans l'associatif",
        href: "",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt enim atque, accusamus veniam laboriosam, omnis exercitationem explicabo ipsa voluptate voluptatem nostrum! Consequuntur reiciendis quidem neque quae magni provident laudantium error.",
        imageUrl:
          "https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80",
      },
    ],
  },
};

const Template: Story<HeaderProps> = () => {
  return <Header {...HeaderPropsExample} />;
};

export const HeaderExample = Template.bind({});
