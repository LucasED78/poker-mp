import IPokerCard from "./IPokerCard";

class PokerSuits {
  suits: IPokerCard[]

  constructor(suits: IPokerCard[]) {
    this.suits = suits;
  }
}

export default PokerSuits;