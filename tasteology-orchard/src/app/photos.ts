import { StaticImageData } from "next/image";
import cooking from "./images/photo-cooking.png";
import recipe from "./images/photo-recipe.png";
import eggs from "./images/photo-eggs.png";
import redFood from "./images/photo-red-food.png";
import greenFood from "./images/photo-green-food.png";
import whiteFood from "./images/photo-white-food.png";


export type PhotoImage = {
  id: string;
  name: string;
  src: StaticImageData;
  desc: string;
};

const photoImages: PhotoImage[] = [
  {
    id: "cooking",
    name: "Cooking",
    src: cooking,
    desc: "Is it simply applying heat to a food product?",
  },
  {
    id: "recipe",
    name: "Recipe",
    src: recipe,
    desc: "A way of making certain food safe to eat?",
  },
  {
    id: "eggs",
    name: "Tray of Eggs",
    src: eggs,
    desc: "Or a way to create flavour and make food more appealing?",
  },
  {
    id: "red",
    name: "Red Food",
    src: redFood,
    desc: "Red foods remind us of berries and soft fruits, so we anticipate a sweet taste.",
  },
  {
    id: "green",
    name: "Green Food",
    src: greenFood,
    desc: "Fresh, zingy green colours are reminiscent of unripe fruit, promising sour or acid flavours.",
  },
  {
    id: "white",
    name: "White Food",
    src: whiteFood,
    desc: "White foods evoke memories of salt and salty flavours, driving the expectation of a savoury treat.",
  }
];

export default photoImages;