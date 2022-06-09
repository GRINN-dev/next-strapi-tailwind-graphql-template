import { FooterProps, HeaderProps } from "..";

export interface LayoutProps {
  children?: React.ReactNode;
  header: HeaderProps;
  footer: FooterProps;
}
