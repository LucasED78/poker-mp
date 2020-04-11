import PokerCardDefinition from "./src/models/PokerCardDefinition/impl/PokerCardDefinition";

const PD = new PokerCardDefinition();

const cards = PD.generate();

const c = cards.suits.map(e => e.card).reduce((prev, cur) => [...prev, ...cur]);

console.log(c);
