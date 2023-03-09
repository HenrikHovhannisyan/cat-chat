import { generateRandomNumber } from "./generateRandomNumber";
import { SYMBOLS } from "../constants";

export default function messageRandom() {
    const meow = [];
    for (let i = 0; i <= generateRandomNumber(10); i++) {
      meow.push("meow");
    }

    return `${meow.join(" ")}${SYMBOLS[generateRandomNumber(2)]}`;
};
