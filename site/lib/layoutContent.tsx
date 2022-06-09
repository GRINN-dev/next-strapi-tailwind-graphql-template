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
