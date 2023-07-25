import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
import { GrInstagram } from "react-icons/gr";
import { FaTwitter, FaFacebookSquare } from "react-icons/fa";

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
    text: "our Villa's",
    url: "/villa",
  },
];

export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: <FaTwitter /> },
  { id: 2, href: "https://www.instragram.com", icon: <GrInstagram /> },
  { id: 3, href: "https://www.facebook.com", icon: <FaFacebookSquare /> },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: "Our mission built a Eco friendly nature in a way that really emphases on wellbeing, organic living, nature, purity of the mind,",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "Our vision is to share with people simple yet compelling stories about the nature, culture and people of our land.",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "We are running this eco friendly hotels from the last 20 years without harming the nature and the animals.",
  },
];

export const products_url = `/.netlify/functions/products`;

export const single_product_url = `/.netlify/functions/single-product?id=`;
