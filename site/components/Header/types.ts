export interface HeaderProps {
  header: { label: string; href: string }[];
  seeMore?: SeeMoreProps;
}

interface SubHeaderProps {
  label: string;
  href: string;
  icon?: any;
}

interface SeeMoreProps {
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
