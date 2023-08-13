import { Media } from "../types";

import gitrendMain from "@/app/assets/images/screenshot/gitrend/1-main.webp";

import imaginaKidsBooks from "@/app/assets/images/screenshot/imaginakids/1-books.webp";
import imaginaKidsPage from "@/app/assets/images/screenshot/imaginakids/2-page.webp";
import imaginaKidsCharacter from "@/app/assets/images/screenshot/imaginakids/3-character.webp";

import imaginaShoppingMain from "@/app/assets/images/screenshot/imaginashopping/1-main.webp";
import imaginaShoppingCart from "@/app/assets/images/screenshot/imaginashopping/2-cart.webp";
import imaginaShoppingCheckout from "@/app/assets/images/screenshot/imaginashopping/3-checkout.webp";
import imaginaShoppingPayment from "@/app/assets/images/screenshot/imaginashopping/4-payment.webp";
import imaginaShoppingCreditCard from "@/app/assets/images/screenshot/imaginashopping/5-creditcard.webp";

import imaginaWebCover from "@/app/assets/images/screenshot/imaginaweb/1-cover.webp";
import imaginaWebPage from "@/app/assets/images/screenshot/imaginaweb/2-page.webp";
import imaginaWebCharacter from "@/app/assets/images/screenshot/imaginaweb/3-character.webp";

import modos1 from "@/app/assets/images/screenshot/modos/phone1.webp";
import modos2 from "@/app/assets/images/screenshot/modos/phone2.webp";
import modos3 from "@/app/assets/images/screenshot/modos/phone3.webp";
import modos4 from "@/app/assets/images/screenshot/modos/phone4.webp";
import modos5 from "@/app/assets/images/screenshot/modos/phone5.webp";

import sheldonMain from "@/app/assets/images/screenshot/sheldon/1-main.webp";

export const gitrendMedias: Array<Media> = [
  {
    type: "image",
    src: gitrendMain,
    alt: "GiTrend main screen",
    width: 640,
    height: 311,
  },
];

export const imaginaKidsMedias: Array<Media> = [
  {
    type: "image",
    src: imaginaKidsBooks,
    alt: "Book slot selection main screen from ImaginaKIDS",
    width: 640,
    height: 445,
  },
  {
    type: "image",
    src: imaginaKidsPage,
    alt: "Story page containing a penguin and a girl saying 'Hello'",
    width: 640,
    height: 445,
  },
  {
    type: "image",
    src: imaginaKidsCharacter,
    alt: "Screenshot of the ImaginaKIDS character builder screen",
    width: 640,
    height: 445,
  },
];

export const imaginaShoppingMedias: Array<Media> = [
  {
    type: "image",
    src: imaginaShoppingMain,
    alt: "ImaginaShopping main screen containing several book bundles for selling",
    width: 640,
    height: 311,
  },
  {
    type: "image",
    src: imaginaShoppingCart,
    alt: "ImaginaShopping cart containing some books, the bundle prices and the total price",
    width: 640,
    height: 311,
  },
  {
    type: "image",
    src: imaginaShoppingCheckout,
    alt: "Checkout screen showing the list of products being bought",
    width: 640,
    height: 311,
  },
  {
    type: "image",
    src: imaginaShoppingPayment,
    alt: "ImaginaShopping payment screen with some personal data and the summary of the purchase",
    width: 640,
    height: 311,
  },
  {
    type: "image",
    src: imaginaShoppingCreditCard,
    alt: "Credit card payment method screen containing some data and a thumbnail of the card",
    width: 640,
    height: 311,
  },
];

export const imaginaWebMedias: Array<Media> = [
  {
    type: "image",
    src: imaginaWebCover,
    alt: "Cover screen of ImaginaWeb with the title 'My Story', the student's name and a list of scenarios",
    width: 640,
    height: 311,
  },
  {
    type: "image",
    src: imaginaWebPage,
    alt: "ImaginaWeb story page with a kitchen scenario, a white dog and a girl saying 'Hello'",
    width: 640,
    height: 311,
  },
  {
    type: "image",
    src: imaginaWebCharacter,
    alt: "Screenshot of the ImaginaWeb character builder screen",
    width: 640,
    height: 311,
  },
];

export const modosMedias: Array<Media> = [
  {
    type: "image",
    src: modos1,
    alt: "Screenshot of Modos containing a list of lessons",
    width: 191,
    height: 340,
  },
  {
    type: "image",
    src: modos2,
    alt: "Lesson details page, containing some information about the content",
    width: 191,
    height: 340,
  },
  {
    type: "image",
    src: modos3,
    alt: "List of media contents of a lesson",
    width: 191,
    height: 340,
  },
  {
    type: "image",
    src: modos4,
    alt: "Screenshot showing a text content from a lesson, containing an audio note attached to it",
    width: 191,
    height: 340,
  },
  {
    type: "image",
    src: modos5,
    alt: "Screenshot of an image media related to the content 'relief', showing some bulls in a pasture",
    width: 191,
    height: 340,
  },
];

export const sheldonMedias: Array<Media> = [
  {
    type: "image",
    src: sheldonMain,
    alt: "Sheldon main screen showing a list of students, and buttons to generate different book types",
    width: 640,
    height: 311,
  },
];
