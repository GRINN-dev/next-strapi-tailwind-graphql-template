import { FooterProps, HeaderProps } from "../components";
import { LayoutEntityResponse } from "../graphql";

export const headerContent: (layout: LayoutEntityResponse) => HeaderProps = (
  layout
) => {
  return {
    logo:
      "http://localhost:1337" +
      layout?.data?.attributes?.logo?.data?.attributes?.url,
    header: layout?.data?.attributes?.headerMainNavigation?.map((x) => {
      return {
        label: x?.label,
        href: x?.href,
      };
    }),
  };
};

export const footerContent: (layout: LayoutEntityResponse) => FooterProps = (
  layout
) => {
  return {
    navigation: layout?.data?.attributes?.footerNavigation?.map((x) => {
      return {
        title: x?.title,
        pages: x?.subFooterNavigation?.map((y) => {
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
