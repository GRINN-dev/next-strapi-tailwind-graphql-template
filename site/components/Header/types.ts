export interface HeaderProps {
  logo?: string | null | undefined;
  header?: {
    label: string | null | undefined;
    href: string | null | undefined;
  }[];
  seeMore?: SeeMoreProps;
}

export interface SeeMoreProps {
  subHeader?: {
    label: string;
    href: string;
    subHeader?: SubHeaderProps[];
  }[];
  blog?: {
    title: string;
    href: string;
    description: string;
    imageUrl: string;
  }[];
}

interface SubHeaderProps {
  label: string;
  href: string;
  icon?: any;
}
