import { FC, Fragment } from "react";
import { SeeMoreProps } from "..";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Image from "next/image";

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

export const SeeMore: FC<SeeMoreProps> = ({ title, subHeader, blog }) => {
  return (
    <Popover>
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              open ? "text-gray-900" : "text-gray-500",
              "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            )}
          >
            <span>{title || "Plus"}</span>
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
                {subHeader && (
                  <nav className="grid px-4 py-8 bg-white gap-y-10 sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12">
                    {subHeader?.map((x, index) => (
                      <div key={index}>
                        <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
                          {x.title || ""}
                        </h3>
                        <ul role="list" className="mt-5 space-y-6">
                          {x.pages?.map((y, index) => (
                            <li key={index} className="flow-root">
                              <a
                                href={y.href || ""}
                                className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                              >
                                {y.icon && y.icon}
                                <span className="ml-4">{y.label || ""}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </nav>
                )}
                {blog && (
                  <div className="px-4 py-8 bg-gray-50 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
                    <div>
                      <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
                        Blog
                      </h3>
                      <ul role="list" className="mt-6 space-y-6">
                        {blog?.map((post, index) => (
                          <li key={index} className="flow-root">
                            <a
                              href={post?.href || ""}
                              className="flex p-3 -m-3 rounded-lg hover:bg-gray-100"
                            >
                              <div className="flex-shrink-0 hidden sm:block">
                                <div className="relative w-32 h-20">
                                  <Image
                                    className="object-cover rounded-md"
                                    src={post?.imageUrl || ""}
                                    alt=""
                                    layout="fill"
                                  />
                                </div>
                              </div>
                              <div className="flex-1 w-0 sm:ml-8">
                                <h4 className="text-base font-medium text-gray-900 truncate">
                                  {post?.title || ""}
                                </h4>
                                <p className="mt-1 text-sm text-gray-500">
                                  {post?.description || ""}
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
                        Tous les posts <span aria-hidden="true">&rarr;</span>
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
  );
};
