class PlayerHand {
  cards: string[];

  constructor(cards: string[]){
    this.cards = cards;
  }

  static fromJSON(data: any): PlayerHand {
    return new PlayerHand(data);
  }
}

export default PlayerHand;