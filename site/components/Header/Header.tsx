import { Popover, Transition } from "@headlessui/react";
import { FC, Fragment, useEffect, useState } from "react";
import Image from "next/image";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { HeaderProps } from ".";
import { SeeMore } from "..";

export const Header: FC<HeaderProps> = ({ logo, header, seeMore }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`sticky top-0 z-50 w-full transition duration-300 ease-in-out md:bg-opacity-90 ${
        isScrolled && "backdrop-blur border-b border-gray-200 bg-white/30"
      }`}
    >
      <Popover className="relative">
        <div
          className="absolute inset-0 z-30 shadow pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative z-20">
          <div className="flex items-center justify-between px-4 py-5 mx-auto max-w-7xl sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
            <div>
              <a href="#" className="flex">
                <span className="sr-only">Workflow</span>
                <div className="relative w-10 h-8 sm:h-10">
                  <Image
                    src={
                      logo ||
                      "https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    }
                    alt=""
                    layout="fill"
                    className="object-contain"
                  />
                </div>
              </a>
            </div>
            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="w-6 h-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
              <Popover.Group
                as="nav"
                className="flex justify-center flex-grow space-x-10"
              >
                {header?.map((x, index) => (
                  <a
                    key={index}
                    href={x.href || ""}
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    {x.label || ""}
                  </a>
                ))}
                {seeMore && seeMore.isDisplayed && (
                  <SeeMore
                    subHeader={seeMore.subHeader}
                    blog={seeMore.blog}
                    title={seeMore.title}
                    isDisplayed={seeMore.isDisplayed}
                  />
                )}
              </Popover.Group>
              <div className="flex items-center md:ml-12">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700"
                >
                  Donner
                </a>
              </div>
            </div>
          </div>
        </div>
        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 z-30 p-2 transition origin-top-right transform md:hidden"
          >
            <div className="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
              <div className="px-5 pt-5 pb-6 sm:pb-8">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="relative w-10 h-8 sm:h-10">
                      <Image
                        src={
                          logo ||
                          "https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        }
                        alt=""
                        layout="fill"
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="w-6 h-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6 sm:mt-8"></div>
              </div>
              <div className="px-5 py-6">
                <div className="grid grid-cols-2 gap-4">
                  {header?.map((x, index) => (
                    <a
                      key={index}
                      href={x.href || ""}
                      className="text-base font-medium text-gray-900 rounded-md hover:text-gray-700"
                    >
                      {x.label || ""}
                    </a>
                  ))}
                  {seeMore?.subHeader &&
                    seeMore?.subHeader?.map((x, index) => (
                      <a
                        key={index}
                        href={x?.href || ""}
                        className="text-base font-medium text-gray-900 rounded-md hover:text-gray-700"
                      >
                        {x?.title || ""}
                      </a>
                    ))}
                  {seeMore?.blog && (
                    <a
                      href=""
                      className="text-base font-medium text-gray-900 rounded-md hover:text-gray-700"
                    >
                      Blog
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  );
};
