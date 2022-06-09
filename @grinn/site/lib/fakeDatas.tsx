import { FooterProps, HeaderProps } from "../components";
import { NewspaperIcon, OfficeBuildingIcon } from "@heroicons/react/outline";

export const HeaderPropsExample: HeaderProps = {
  logo: "https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg",
  header: [
    { label: "Notre histoire", href: "" },
    { label: "Qui sommes nous", href: "" },
    { label: "L'équipe", href: "" },
  ],
  seeMore: {
    title: "Voir plus",
    isDisplayed: true,
    subHeader: [
      {
        title: "La presse en parle",
        href: "",
        pages: [
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
        title: "Nos projets",
        href: "",
        pages: [
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

export const FooterPropsExample: FooterProps = {
  navigation: [
    {
      title: "L'association",
      pages: [
        { label: "Notre histoire", href: "" },
        { label: "Qui sommes nous", href: "" },
        { label: "L'équipe", href: "" },
      ],
    },
    {
      title: "Autour de nous",
      pages: [
        { label: "Presse", href: "" },
        { label: "Blog", href: "" },
        { label: "Partenaires", href: "" },
      ],
    },
    {
      title: "Legal",
      pages: [
        { label: "Claim", href: "" },
        { label: "Privacy", href: "" },
        { label: "Terms", href: "" },
      ],
    },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
    },
    {
      name: "Instagram",
      href: "#",
    },
    {
      name: "Twitter",
      href: "#",
    },
    {
      name: "GitHub",
      href: "#",
    },
    {
      name: "Dribbble",
      href: "#",
    },
  ],
  newsletter: {
    title: "Abonnez-vous à notre newsletter",
    text: "Restez informés de nos actualités en recevant une fois par semaine notre newsletter",
  },
};
