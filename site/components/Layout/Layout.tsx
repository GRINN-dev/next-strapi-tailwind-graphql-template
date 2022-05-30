import { FC } from "react";
import { LayoutProps } from ".";
import { Footer, Header } from "..";

export const Layout: FC<LayoutProps> = ({ children, header, footer }) => {
  return (
    <>
      <Header {...header} />
      <main className="px-4 py-12 mx-auto mt-16 md:mt-12 max-w-7xl sm:px-6 lg:py-16 lg:px-8">
        {children}
      </main>
      <Footer {...footer} />
    </>
  );
};
