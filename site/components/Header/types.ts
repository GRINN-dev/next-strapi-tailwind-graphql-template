export interface HeaderProps {
  logo?: string | null | undefined;
  header?: {
    label: string | null | undefined;
    href: string | null | undefined;
  }[];
  seeMore?: SeeMoreProps;
}

export interface SeeMoreProps {
  title?: string | null | undefined;
  isDisplayed?: boolean | null | undefined;
  subHeader?: SubHeaderProps[];
  blog?: {
    title: string | null | undefined;
    href: string | null | undefined;
    description: string | null | undefined;
    imageUrl: string | null | undefined;
  }[];
}

interface SubHeaderProps {
  title?: string | null | undefined;
  href?: string | null | undefined;
  pages?: {
    label: string | null | undefined;
    href: string | null | undefined;
    icon?: any;
  }[];
}
