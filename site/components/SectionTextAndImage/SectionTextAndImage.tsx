import { FC } from "react";
import { SectionTextAndImageProps } from ".";
import { CameraIcon } from "@heroicons/react/solid";
import Image from "next/image";

export const SectionTextAndImage: FC<SectionTextAndImageProps> = ({
  sections,
}) => {
  return (
    <section>
      {sections.map((section, index) => (
        <div className="overflow-hidden bg-white" key={index}>
          <div className="relative px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
              <div>
                <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">
                  {section.mainTitle}
                </h2>
                <h3 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                  {section.secondaryTitle}
                </h3>
              </div>
            </div>
            <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
              <div
                className={`${
                  index % 2 === 1 ? "lg:col-start-1" : "lg:col-start-2"
                } relative lg:row-start-1`}
              >
                <div className="relative mx-auto text-base max-w-prose lg:max-w-none">
                  <figure>
                    <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                      <div className="relative">
                        <Image
                          className="object-cover object-center rounded-lg shadow-lg"
                          src={section.image || ""}
                          alt="Whitney leaning against a railing on a downtown street"
                          width={1184}
                          height={1376}
                        />
                      </div>
                    </div>
                    <figcaption className="flex mt-3 text-sm text-gray-500">
                      <CameraIcon
                        className="flex-none w-5 h-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="ml-2">Photograph by Marcus O’Leary</span>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div className="mt-8 lg:mt-0">
                <div className="mx-auto text-base max-w-prose lg:max-w-none">
                  {section.introduction}
                </div>
                <div className="mx-auto mt-5 prose text-gray-500 prose-indigo lg:max-w-none lg:row-start-1 lg:col-start-1">
                  {section.text}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
