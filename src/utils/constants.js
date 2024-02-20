import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: "Peoples Kart is dedicated to providing top-notch furniture and home decor, tailored to your style and budget. We aim to make your shopping experience seamless, offering a wide range of products to transform your space into a haven of comfort and style.",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "At Peoples Kart, we aspire to be the ultimate destination for premium, customizable furniture and home decor. We're committed to innovation and customer satisfaction, empowering you to create a home that reflects your unique personality and lifestyle.",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "Peoples Kart was founded with passion for quality and customization. Over the years, we've earned a reputation for excellence, offering range of products that cater to every taste. Our history is a testament to our commitment to quality, innovation, and customer satisfaction.",
  },
];

export const products_url = "https://course-api.com/react-store-products";

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
