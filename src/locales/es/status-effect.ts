import { StatusEffectTranslationEntries } from "#app/interfaces/locales.js";

export const statusEffect: StatusEffectTranslationEntries = {
  none: {
    name: "Ninguno",
    description: "",
    obtain: "",
    obtainSource: "",
    activation: "",
    overlap: "",
    heal: ""
  },
  poison: {
    name: "Envenenamiento",
    description: "envenenamiento",
    obtain: "¡{{pokemonNameWithAffix}}\nha sido envenenado!",
    obtainSource: "¡{{pokemonNameWithAffix}}\nha sido envenenado por {{sourceText}}!",
    activation: "¡El veneno resta PS a {{pokemonNameWithAffix}}!",
    overlap: "¡{{pokemonNameWithAffix}} ya\nestá envenenado!",
    heal: "¡{{pokemonNameWithAffix}} ya no\nestá envenenado!"
  },
  toxic: {
    name: "Envenenamiento grave",
    description: "envenenamiento grave",
    obtain: "¡{{pokemonNameWithAffix}}\nha sido gravemente envenenado!",
    obtainSource: "¡{{pokemonNameWithAffix}}\nha sido gravemente envenenado por {{sourceText}}!",
    activation: "¡El veneno resta PS a {{pokemonNameWithAffix}}!",
    overlap: "¡{{pokemonNameWithAffix}} ya\nestá envenenado!",
    heal: "¡{{pokemonNameWithAffix}} ya no\nestá envenenado!"
  },
  paralysis: {
    name: "Parálisis",
    description: "parálisis",
    obtain: "¡{{pokemonNameWithAffix}} sufre parálisis!\nQuizás no se pueda mover.",
    obtainSource: "¡{{pokemonNameWithAffix}} sufre parálisis por {{sourceText}}!\nQuizás no se pueda mover.",
    activation: "¡{{pokemonNameWithAffix}} está paralizado!\n¡No se puede mover!",
    overlap: "¡{{pokemonNameWithAffix}} ya\nestá paralizado!",
    heal: "¡{{pokemonNameWithAffix}} ya no\nestá paralizado!"
  },
  sleep: {
    name: "Dormir",
    description: "dormir",
    obtain: "¡{{pokemonNameWithAffix}}\nse ha dormido!",
    obtainSource: "¡{{pokemonNameWithAffix}}\nse ha dormido\npor culpa de {{sourceText}}!",
    activation: "¡{{pokemonNameWithAffix}} está/ndormido como un tronco.",
    overlap: "¡{{pokemonNameWithAffix}} ya\nestá dormido!",
    heal: "¡{{pokemonNameWithAffix}} se despertó!"
  },
  freeze: {
    name: "Congelamiento",
    description: "congelamiento",
    obtain: "¡{{pokemonNameWithAffix}}\nha sido congelado!",
    obtainSource: "¡{{pokemonNameWithAffix}}\nha sido congelado por {{sourceText}}!",
    activation: "¡{{pokemonNameWithAffix}} está\ncongelado!",
    overlap: "¡{{pokemonNameWithAffix}} ya\nestá congelado!",
    heal: "¡{{pokemonNameWithAffix}} se\nha descongelado!"
  },
  burn: {
    name: "Quemadura",
    description: "quemadura",
    obtain: "¡{{pokemonNameWithAffix}}\nse ha quemado!",
    obtainSource: "¡{{pokemonNameWithAffix}}\nse ha quemado por {{sourceText}}!",
    activation: "¡{{pokemonNameWithAffix}} se resiente\nde las quemaduras!",
    overlap: "¡{{pokemonNameWithAffix}} ya\nestá quemado!",
    heal: "¡{{pokemonNameWithAffix}} ya no\nestá quemado!"
  },
} as const;
