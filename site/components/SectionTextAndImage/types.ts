export interface SectionTextAndImageProps {
  sections: SectionProps[];
}

interface SectionProps {
  mainTitle: string | null | undefined;
  secondaryTitle?: string | null | undefined;
  introduction?: any;
  text: any;
  image: string | null | undefined;
}
