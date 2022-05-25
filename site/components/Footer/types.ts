/* Maximum 4 colonnes de navigation pour que cela rentre dans l'affichage */
export interface FooterProps {
  navigation: NavigationProps[];
  social: { name: string; href: string; icon: any }[];
  newsletter: { title: string; text: string };
}

interface NavigationProps {
  title: string;
  pages: { label: string; href: string }[];
}
