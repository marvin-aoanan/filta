import { StaticImageData } from "next/image";
import imageLeft from "./photos/image-left.png";
import imageRightBottom from "./photos/image-right-bottom.png";
import imageRightTop from "./photos/image-right-top.png";
import redFood from "./photos/red-food.png";
import greenFood from "./photos/green-food.png";
import whiteFood from "./photos/white-food.png";


export type PhotoImage = {
  id: string;
  name: string;
  src: StaticImageData;
  desc: string;
};

const photoImages: PhotoImage[] = [
  {
    id: "1",
    name: "Cooking",
    src: imageLeft,
    desc: "Is it simply applying heat to a food product?",
  },
  {
    id: "2",
    name: "Recipe",
    src: imageRightTop,
    desc: "A way of making certain food safe to eat?",
  },
  {
    id: "3",
    name: "Tray of Eggs",
    src: imageRightBottom,
    desc: "Or a way to create flavour and make food more appealing?",
  },
  {
    id: "4",
    name: "Red Food",
    src: redFood,
    desc: "Red foods remind us of berries and soft fruits, so we anticipate a sweet taste.",
  },
  {
    id: "5",
    name: "Green Food",
    src: greenFood,
    desc: "Fresh, zingy green colours are reminiscent of unripe fruit, promising sour or acid flavours.",
  },
  {
    id: "6",
    name: "White Food",
    src: whiteFood,
    desc: "White foods evoke memories of salt and salty flavours, driving the expectation of a savoury treat.",
  }
];

export default photoImages;