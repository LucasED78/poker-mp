import IPokerCard from "./IPokerCard";

class PokerCard implements IPokerCard {
  card: string[];

  constructor(card: string[]) {
    this.card = card;
  }
}

export default PokerCard;