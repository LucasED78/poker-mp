import IPokerCardDefinition from "../IPokerCardDefinition";
import PokerSuits from "../../PokerSuits";
import PokerCard from "../../PokerCard";

class PokerCardDefinition implements IPokerCardDefinition<PokerSuits> {
  cards: string[][] = [
    ['c', 'h', 's', 'd'],
    ['A', 'K', 'J', 'Q', '2', '3', '4', '5', '6', '7', '8', '9', '10']
  ]

  generate(): PokerSuits {
    const suits: PokerCard[] = [];
    let cards: string[] = [];

    for(const suit of this.cards[0]) {
      for (const card of this.cards[1]) {
        cards.push(card + suit);
      }

      suits.push(new PokerCard(cards))
      cards = [];
    }

    return new PokerSuits(suits);
  }
  
}

export default PokerCardDefinition;