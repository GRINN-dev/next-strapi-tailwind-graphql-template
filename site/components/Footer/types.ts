/* Maximum 4 colonnes de navigation pour que cela rentre dans l'affichage */
export interface FooterProps {
  navigation?: NavigationProps[];
  social?: {
    name: string | null | undefined;
    href: string | null | undefined;
  }[];
  newsletter?: {
    title: string | null | undefined;
    text: string | null | undefined;
  };
}

interface NavigationProps {
  title?: string | null | undefined;
  pages?: {
    label: string | null | undefined;
    href: string | null | undefined;
  }[];
}
