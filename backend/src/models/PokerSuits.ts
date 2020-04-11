import IPokerCard from "./PokerCard/IPokerCard";

class PokerSuits {
  suits: IPokerCard[]

  constructor(suits: IPokerCard[]) {
    this.suits = suits;
  }
}

export default PokerSuits;