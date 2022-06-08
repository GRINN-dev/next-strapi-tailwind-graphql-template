import { FooterProps, HeaderProps } from "../components";
import { LayoutEntityResponse } from "../graphql";

export const headerContent: (layout: LayoutEntityResponse) => HeaderProps = (
  layout
) => {
  return {
    logo: layout?.data?.attributes?.logo?.data?.attributes?.url
      ? /* process.env.NEXT_PUBLIC_ASSETS_URL || */
        "http://localhost:1337" +
        layout?.data?.attributes?.logo?.data?.attributes?.url
      : "",
    header: layout?.data?.attributes?.headerMainNavigation?.map((x) => {
      return {
        label: x?.label,
        href: x?.href,
      };
    }),
    seeMore: {
      title: layout?.data?.attributes?.headerSecondaryNavigationTitle,
      isDisplayed: layout?.data?.attributes?.isDisplayed,
      subHeader: layout?.data?.attributes?.headerSecondaryNavigation?.map(
        (x) => {
          return {
            title: x?.title,
            href: x?.href,
            pages: x?.subNavigation?.map((y) => {
              return {
                label: y?.label,
                href: y?.href,
              };
            }),
          };
        }
      ),
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
};

export const footerContent: (layout: LayoutEntityResponse) => FooterProps = (
  layout
) => {
  return {
    navigation: layout?.data?.attributes?.footerNavigation?.map((x) => {
      return {
        title: x?.title,
        pages: x?.subNavigation?.map((y) => {
          return {
            label: y?.label,
            href: y?.href,
          };
        }),
      };
    }),
    social: layout?.data?.attributes?.socials?.map((x) => {
      return {
        name: x?.type,
        href: x?.href,
      };
    }),
  };
};
