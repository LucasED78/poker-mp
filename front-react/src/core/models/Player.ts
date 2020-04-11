import PlayerHand from "./PlayerHand";
import HandInformation from "./HandInformation";

class Player {
  cards: PlayerHand;
  handInformation: HandInformation;

  constructor(cards: PlayerHand, handInformation: HandInformation) {
    this.cards = cards;
    this.handInformation = handInformation;
  }

  static fromJSON(data: any): Player {
    return new Player(
      PlayerHand.fromJSON(data.hand),
      HandInformation.fromJSON(data.data)
    )
  }
}

export default Player;