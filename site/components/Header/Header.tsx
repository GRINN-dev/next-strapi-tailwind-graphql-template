import { Popover, Transition } from "@headlessui/react";
import { FC, Fragment, useEffect, useState } from "react";
import Image from "next/image";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { HeaderProps } from ".";

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

export const Header: FC<HeaderProps> = ({ header, seeMore }) => {
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
              <div className="flex items-center justify-center w-16 h-16 bg-yellow-300 rounded-full">
                Logo
              </div>
              {/* <a href="#" className="flex">
                <span className="sr-only">Workflow</span>
                <div className="relative w-10 h-8 sm:h-10">
                  <Image
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt=""
                    layout="fill"
                    className="object-contain"
                  />
                </div>
              </a> */}
            </div>
            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="w-6 h-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
              <Popover.Group as="nav" className="flex space-x-10">
                {header.map((x, index) => (
                  <a
                    key={index}
                    href={x.href}
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    {x.label}
                  </a>
                ))}
                {seeMore && (
                  <Popover>
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            open ? "text-gray-900" : "text-gray-500",
                            "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          )}
                        >
                          <span>Plus</span>
                          <ChevronDownIcon
                            className={classNames(
                              open ? "text-gray-600" : "text-gray-400",
                              "ml-2 h-5 w-5 group-hover:text-gray-500"
                            )}
                            aria-hidden="true"
                          />
                        </Popover.Button>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 -translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 -translate-y-1"
                        >
                          <Popover.Panel className="absolute inset-x-0 z-10 hidden transform shadow-lg md:block top-full">
                            <div className="absolute inset-0 flex">
                              <div className="w-1/2 bg-white" />
                              <div className="w-1/2 bg-gray-50" />
                            </div>
                            <div className="relative grid grid-cols-1 mx-auto max-w-7xl lg:grid-cols-2">
                              {seeMore?.subHeader && (
                                <nav className="grid px-4 py-8 bg-white gap-y-10 sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12">
                                  {seeMore?.subHeader?.map((x, index) => (
                                    <div key={index}>
                                      <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
                                        {x.label}
                                      </h3>
                                      <ul
                                        role="list"
                                        className="mt-5 space-y-6"
                                      >
                                        {x.subHeader?.map((y, index) => (
                                          <li key={index} className="flow-root">
                                            <a
                                              href={y.href}
                                              className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                                            >
                                              {y.icon}
                                              <span className="ml-4">
                                                {y.label}
                                              </span>
                                            </a>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                </nav>
                              )}
                              {seeMore?.blog && (
                                <div className="px-4 py-8 bg-gray-50 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
                                  <div>
                                    <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
                                      Blog
                                    </h3>
                                    <ul role="list" className="mt-6 space-y-6">
                                      {seeMore?.blog?.map((post, index) => (
                                        <li key={index} className="flow-root">
                                          <a
                                            href={post.href}
                                            className="flex p-3 -m-3 rounded-lg hover:bg-gray-100"
                                          >
                                            {/* <div className="flex-shrink-0 hidden sm:block">
                                          <div className="relative w-32 h-20">
                                            <Image
                                              className="object-cover rounded-md"
                                              src={post.imageUrl}
                                              alt=""
                                              layout="fill"
                                            />
                                          </div>
                                        </div> */}
                                            <div className="flex-1 w-0 sm:ml-8">
                                              <h4 className="text-base font-medium text-gray-900 truncate">
                                                {post.title}
                                              </h4>
                                              <p className="mt-1 text-sm text-gray-500">
                                                {post.description}
                                              </p>
                                            </div>
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                  <div className="mt-6 text-sm font-medium">
                                    <a
                                      href="#"
                                      className="text-indigo-600 hover:text-indigo-500"
                                    >
                                      {" "}
                                      Tous les posts{" "}
                                      <span aria-hidden="true">&rarr;</span>
                                    </a>
                                  </div>
                                </div>
                              )}
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
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
                    <div className="flex items-center justify-center w-16 h-16 bg-yellow-300 rounded-full">
                      Logo
                    </div>
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="w-6 h-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6 sm:mt-8">
                  {/* <nav>
                    <div className="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                      {solutions.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50"
                        >
                          <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-md sm:h-12 sm:w-12">
                            <item.icon className="w-6 h-6" aria-hidden="true" />
                          </div>
                          <div className="ml-4 text-base font-medium text-gray-900">
                            {item.name}
                          </div>
                        </a>
                      ))}
                    </div>
                    <div className="mt-8 text-base">
                      <a
                        href="#"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        {" "}
                        View all products <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </nav> */}
                </div>
              </div>
              <div className="px-5 py-6">
                <div className="grid grid-cols-2 gap-4">
                  {header.map((x, index) => (
                    <a
                      key={index}
                      href={x.href}
                      className="text-base font-medium text-gray-900 rounded-md hover:text-gray-700"
                    >
                      {x.label}
                    </a>
                  ))}
                  {seeMore?.subHeader &&
                    seeMore?.subHeader?.map((x, index) => (
                      <a
                        key={index}
                        href={x.href}
                        className="text-base font-medium text-gray-900 rounded-md hover:text-gray-700"
                      >
                        {x.label}
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
                {/* <div className="mt-6">
                  <a
                    href="#"
                    className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700"
                  >
                    Sign up
                  </a>
                  <p className="mt-6 text-base font-medium text-center text-gray-500">
                    Existing customer?{" "}
                    <a href="#" className="text-indigo-600 hover:text-indigo-500">
                      Sign in
                    </a>
                  </p>
                </div> */}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  );
};
