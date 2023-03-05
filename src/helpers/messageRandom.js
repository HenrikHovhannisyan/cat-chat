import { generateRandomNumber } from "./generateRandomNumber";
import { symbols } from "./symbols";

export const messageRandom = () => {
    const meow = [];
    for (let i = 0; i <= generateRandomNumber(10); i++) {
      meow.push("meow");
    }

    return `${meow.join(" ")}${symbols[generateRandomNumber(2)]}`;
};