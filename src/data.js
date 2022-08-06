// import icons
import {
  IoLogoYoutube,
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoMdAddCircle,
  IoIosCheckmarkCircle,
  IoIosArrowRoundForward,
} from "react-icons/io";

// import images
import Flower1Img from "./assets/img/flower-1.png";
import Features2Img from "./assets/img/features-2.png";
import ChairImg from "./assets/img/chair.png";
import BedImg from "./assets/img/bed.png";
import CupboardImg from "./assets/img/products/flower-12.jpg";
import LightingImg from "./assets/img/products/flower-13.jpg";
import Flower2Img from "./assets/img/products/flower-2.jpg";
import Flower3Img from "./assets/img/products/flower-3.jpg";
import Flower4Img from "./assets/img/products/flower-4.jpg";
import Flower5Img from "./assets/img/products/flower-5.jpg";
import Flower6Img from "./assets/img/products/flower-6.jpg";
import Flower7Img from "./assets/img/products/flower-7.jpg";
import Flower8Img from "./assets/img/products/flower-8.jpg";
import Flower9Img from "./assets/img/products/flower-9.jpg";
import Flower10Img from "./assets/img/products/flower-10.jpg";
import Flower11Img from "./assets/img/products/flower-11.jpg";
import Flower12Img from "./assets/img/products/flower-12.jpg";
import Flower13Img from "./assets/img/products/flower-13.jpg";
import Flower14Img from "./assets/img/products/flower-14.jpg";
import Flower15Img from "./assets/img/products/flower-15.jpg";
import TestimonialImg from "./assets/img/testimonial.png";
import Avatar1Img from "./assets/img/avatar-1.png";
import Avatar2Img from "./assets/img/avatar-2.png";
import Avatar3Img from "./assets/img/avatar-3.png";
import Avatar4Img from "./assets/img/avatar-4.png";

export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "flower",
    href: "flower",
  },
  {
    name: "contact",
    href: "contact",
  },
];

export const hero = {
  title: "Creative Home Simpify your Flower",
  subtitle: "Please say something about your product",
  buttonText: "Shop Now",
};

export const stats = [
  {
    value: "7",
    text: "Year Experience",
  },
  {
    value: "2",
    text: "Opened in the country",
  },
  {
    value: "10k+",
    text: "Furniture sold",
  },
  {
    value: "260+",
    text: "Variant Furniture",
  },
];

export const features = {
  image: <Flower1Img />,
  title: "We create a more beautiful garden for you",
  subtitle:
    "Flower is a beautiful blablablablablablablablalbalbalblablablablablablabla...........................................",
  buttonText: "Show Now",
  items: [
    {
      icon: <IoIosCheckmarkCircle />,
      title: "some services",
      subtitle:
        "Sometimes features require a short description.  This can be detailed description",
    },
    {
      icon: <IoIosCheckmarkCircle />,
      title: "flower research",
      subtitle:
        "Sometimes features require a short description.  This can be detailed description",
    },
  ],
  feature2: {
    image: <Features2Img />,
    title: "The Best Furniture Manufacturer of your choice",
    subtitle:
      "Furnitre power is a software as services for multiperpose business management system, expecially for them who are running two or more business exploree the future Furnitre power is a software as services.",
  },
};

export const newInStore = {
  title: "New In Store Now",
  subtitle: "Get the latest items immediately with promo prices",
  link: "Check all",
  icon: <IoIosArrowRoundForward />,
  products: [
    {
      name: "chair",
      image: <ChairImg />,
    },
    {
      name: "bed",
      image: <BedImg />,
    },
    {
      name: "cupboard",
      image: <CupboardImg />,
    },
    {
      name: "lighting",
      image: <LightingImg />,
    },
  ],
};

export const products = {
  title: "All Products",
  subtitle:
    "The products we provide only for you as our service are selected from the best products with number 1 quality in the world",
  pages: [
    {
      productList: [
        {
          image: <Flower2Img />,
          icon: <IoMdAddCircle />,
          name: "flower name",
          price: 75,
          oldPrice: 82,
        },
        {
          image: <Flower3Img />,
          icon: <IoMdAddCircle />,
          name: "flower name",
          price: 50,
          oldPrice: 70,
        },
        {
          image: <Flower4Img />,
          icon: <IoMdAddCircle />,
          name: "flower name",
          price: 105,
          oldPrice: 120,
        },
        {
          image: <Flower5Img />,
          icon: <IoMdAddCircle />,
          name: "flower name",
          price: 75,
          oldPrice: 82,
        },
        {
          image: <Flower6Img />,
          icon: <IoMdAddCircle />,
          name: "flower name",
          price: 200,
          oldPrice: 210,
        },
        {
          image: <Flower7Img />,
          icon: <Flower2Img />,
          name: "flower name",
          price: 45,
          oldPrice: 50,
        },
        {
          image: <Flower8Img />,
          icon: <IoMdAddCircle />,
          name: "flower name",
          price: 320,
          oldPrice: 325,
        },
        {
          image: <Flower9Img />,
          icon: <IoMdAddCircle />,
          name: "flower name",
          price: 225,
          oldPrice: 240,
        },
        {
          image: <Flower10Img />,
          icon: <IoMdAddCircle />,
          name: "flower name",
          price: 105,
          oldPrice: 120,
        },
        {
          image: <Flower11Img />,
          icon: <IoMdAddCircle />,
          name: "flower name",
          price: 75,
          oldPrice: 82,
        },
      ],
    },
    {
      productList: [
        {
          image: <Flower12Img />,
          icon: <IoMdAddCircle />,
          name: "flower name",
          price: 75,
          oldPrice: 82,
        },
        {
          image: <Flower13Img />,
          icon: <IoMdAddCircle />,
          name: "flower name",
          price: 50,
          oldPrice: 70,
        },
        {
          image: <Flower14Img />,
          icon: <IoMdAddCircle />,
          name: "flower name",
          price: 105,
          oldPrice: 120,
        },
        {
          image: <Flower15Img />,
          icon: <IoMdAddCircle />,
          name: "flower name",
          price: 75,
          oldPrice: 82,
        },
      ],
    },
  ],
};

export const testimonial = {
  title: "What people are saying about us",
  image: <TestimonialImg />,
  persons: [
    {
      avatar: <Avatar1Img />,
      name: "Josh Smith",
      occupation: "Manager of The New York Times",
      message:
        "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”",
    },
    {
      avatar: <Avatar2Img />,
      name: "Brandi Johns",
      occupation: "Manager of The New York Times",
      message:
        "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”",
    },
    {
      avatar: <Avatar3Img />,
      name: "Paula Pfeffer",
      occupation: "Manager of The New York Times",
      message:
        "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”",
    },
  ],
};

export const newsletter = {
  title: "Please contact me",
  subtitle: "Become a florist's partner",
  placeholder: "Your email address",
  buttonText: "Shop Now",
};

export const footer = {
  social: [
    {
      icon: <IoLogoYoutube />,
      href: "#",
    },
    {
      icon: <IoLogoInstagram />,
      href: "#",
    },
    {
      icon: <IoLogoGithub />,
      href: "#",
    },
    {
      icon: <IoLogoFacebook />,
      href: "#",
    },
  ],
  copyright: "FurniShop 2022 - All Rights Reserved.",
};
