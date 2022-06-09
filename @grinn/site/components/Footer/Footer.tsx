import { FC } from "react";
import { FooterProps } from ".";
import { getSocialIcon } from "../../lib";

export const Footer: FC<FooterProps> = ({ navigation, social, newsletter }) => {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="py-12 lg:py-16">
        <div className="px-4 mx-auto max-w-7xl lg:px-8 sm:px-6 ">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="md:grid md:grid-flow-col md:gap-8 xl:col-span-2">
              {navigation?.map((x, index) => (
                <div
                  key={index}
                  className={`${index !== 0 ? "mt-12 md:mt-0" : ""}`}
                >
                  <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
                    {x?.title || ""}
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {x.pages?.map((y, index) => (
                      <li key={index}>
                        <a
                          href={y?.href || ""}
                          className="text-base text-gray-500 hover:text-gray-900"
                        >
                          {y.label || ""}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-8 xl:mt-0">
              <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
                {newsletter?.title || ""}
              </h3>
              <p className="mt-4 text-base text-gray-500">
                {newsletter?.text || ""}
              </p>
              <form className="mt-4 sm:flex sm:max-w-md">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  required
                  className="w-full min-w-0 px-4 py-2 text-base text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:placeholder-gray-400"
                  placeholder="Votre adresse email"
                />
                <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <button
                    type="submit"
                    className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Souscrire
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="pt-8 mt-8 border-t border-gray-200 ">
          <div className="px-4 mx-auto md:flex md:items-center md:justify-between max-w-7xl lg:px-8 sm:px-6">
            <div className="flex space-x-6 md:order-2">
              {social?.map((x, index) => (
                <a
                  key={index}
                  href={x?.href || ""}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">{x.name || ""}</span>
                  {getSocialIcon(x?.name || "")}
                </a>
              ))}
            </div>
            <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
              &copy; 2020 Workflow, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
