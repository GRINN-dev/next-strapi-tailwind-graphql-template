import {
  FooterProps,
  HeaderProps,
  SectionTextAndImageProps,
} from "../components";
import { NewspaperIcon, OfficeBuildingIcon } from "@heroicons/react/outline";

export const HeaderPropsExample: HeaderProps = {
  logo: "https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg",
  header: [
    { label: "Notre histoire", href: "" },
    { label: "Qui sommes nous", href: "" },
    { label: "L'équipe", href: "" },
  ],
  seeMore: {
    title: "Voir plus",
    isDisplayed: true,
    subHeader: [
      {
        title: "La presse en parle",
        href: "",
        pages: [
          {
            label: "Le Point - 25/05/2022",
            href: "",
            icon: (
              <NewspaperIcon
                className="flex-shrink-0 w-6 h-6 text-gray-400"
                aria-hidden="true"
              />
            ),
          },
        ],
      },
      {
        title: "Nos projets",
        href: "",
        pages: [
          {
            label: "Projet Patrimoine",
            href: "",
            icon: (
              <OfficeBuildingIcon
                className="flex-shrink-0 w-6 h-6 text-gray-400"
                aria-hidden="true"
              />
            ),
          },
        ],
      },
    ],
    blog: [
      {
        title: "S'engager dans l'associatif",
        href: "",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt enim atque, accusamus veniam laboriosam, omnis exercitationem explicabo ipsa voluptate voluptatem nostrum! Consequuntur reiciendis quidem neque quae magni provident laudantium error.",
        imageUrl:
          "https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80",
      },
    ],
  },
};

export const FooterPropsExample: FooterProps = {
  navigation: [
    {
      title: "L'association",
      pages: [
        { label: "Notre histoire", href: "" },
        { label: "Qui sommes nous", href: "" },
        { label: "L'équipe", href: "" },
      ],
    },
    {
      title: "Autour de nous",
      pages: [
        { label: "Presse", href: "" },
        { label: "Blog", href: "" },
        { label: "Partenaires", href: "" },
      ],
    },
    {
      title: "Legal",
      pages: [
        { label: "Claim", href: "" },
        { label: "Privacy", href: "" },
        { label: "Terms", href: "" },
      ],
    },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
    },
    {
      name: "Instagram",
      href: "#",
    },
    {
      name: "Twitter",
      href: "#",
    },
    {
      name: "GitHub",
      href: "#",
    },
    {
      name: "Dribbble",
      href: "#",
    },
  ],
  newsletter: {
    title: "Abonnez-vous à notre newsletter",
    text: "Restez informés de nos actualités en recevant une fois par semaine notre newsletter",
  },
};

export const SectionTextAndImagePropsExample: SectionTextAndImageProps = {
  sections: [
    {
      mainTitle: "Case Study",
      secondaryTitle: "Meet Whitney",
      introduction: (
        <p className="text-lg text-gray-500">
          Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum
          urna sed consectetur neque tristique pellentesque. Blandit amet, sed
          aenean erat arcu morbi.
        </p>
      ),
      text: (
        <>
          <p>
            Sollicitudin tristique eros erat odio sed vitae, consequat turpis
            elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra
            donec ut volutpat donec laoreet quam urna.
          </p>
          <p>
            Bibendum eu nulla feugiat justo, elit adipiscing. Ut tristique sit
            nisi lorem pulvinar. Urna, laoreet fusce nibh leo. Dictum et et et
            sit. Faucibus sed non gravida lectus dignissim imperdiet a.
          </p>
          <p>
            Dictum magnis risus phasellus vitae quam morbi. Quis lorem lorem
            arcu, metus, egestas netus cursus. In.
          </p>
          <ul role="list">
            <li>Quis elit egestas venenatis mattis dignissim.</li>
            <li>
              Cras cras lobortis vitae vivamus ultricies facilisis tempus.
            </li>
            <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
          </ul>
          <p>
            Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt
            vel ultricies. Vulputate aliquet velit faucibus semper. Pellentesque
            in venenatis vestibulum consectetur nibh id. In id ut tempus
            egestas. Enim sit aliquam nec, a. Morbi enim fermentum lacus in.
            Viverra.
          </p>
          <h3>How we helped</h3>
          <p>
            Tincidunt integer commodo, cursus etiam aliquam neque, et.
            Consectetur pretium in volutpat, diam. Montes, magna cursus nulla
            feugiat dignissim id lobortis amet. Laoreet sem est phasellus eu
            proin massa, lectus. Diam rutrum posuere donec ultricies non morbi.
            Mi a platea auctor mi.
          </p>
          <p>
            Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum
            urna sed consectetur neque tristique pellentesque. Blandit amet, sed
            aenean erat arcu morbi.
          </p>
        </>
      ),
      image:
        "https://images.unsplash.com/photo-1546913199-55e06682967e?ixlib=rb-1.2.1&auto=format&fit=crop&crop=focalpoint&fp-x=.735&fp-y=.55&w=1184&h=1376&q=80",
    },
    {
      mainTitle: "Case Study",
      secondaryTitle: "Meet Whitney",
      introduction: (
        <p className="text-lg text-gray-500">
          Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum
          urna sed consectetur neque tristique pellentesque. Blandit amet, sed
          aenean erat arcu morbi.
        </p>
      ),
      text: (
        <>
          <p>
            Sollicitudin tristique eros erat odio sed vitae, consequat turpis
            elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra
            donec ut volutpat donec laoreet quam urna.
          </p>
          <p>
            Bibendum eu nulla feugiat justo, elit adipiscing. Ut tristique sit
            nisi lorem pulvinar. Urna, laoreet fusce nibh leo. Dictum et et et
            sit. Faucibus sed non gravida lectus dignissim imperdiet a.
          </p>
          <p>
            Dictum magnis risus phasellus vitae quam morbi. Quis lorem lorem
            arcu, metus, egestas netus cursus. In.
          </p>
          <ul role="list">
            <li>Quis elit egestas venenatis mattis dignissim.</li>
            <li>
              Cras cras lobortis vitae vivamus ultricies facilisis tempus.
            </li>
            <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
          </ul>
          <p>
            Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt
            vel ultricies. Vulputate aliquet velit faucibus semper. Pellentesque
            in venenatis vestibulum consectetur nibh id. In id ut tempus
            egestas. Enim sit aliquam nec, a. Morbi enim fermentum lacus in.
            Viverra.
          </p>
          <h3>How we helped</h3>
          <p>
            Tincidunt integer commodo, cursus etiam aliquam neque, et.
            Consectetur pretium in volutpat, diam. Montes, magna cursus nulla
            feugiat dignissim id lobortis amet. Laoreet sem est phasellus eu
            proin massa, lectus. Diam rutrum posuere donec ultricies non morbi.
            Mi a platea auctor mi.
          </p>
          <p>
            Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum
            urna sed consectetur neque tristique pellentesque. Blandit amet, sed
            aenean erat arcu morbi.
          </p>
        </>
      ),
      image:
        "https://images.unsplash.com/photo-1546913199-55e06682967e?ixlib=rb-1.2.1&auto=format&fit=crop&crop=focalpoint&fp-x=.735&fp-y=.55&w=1184&h=1376&q=80",
    },
  ],
};
