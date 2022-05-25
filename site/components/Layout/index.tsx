import React, { FC } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
        {children}
      </main>
      <Footer />
    </>
  );
};
