interface IPokerCardDefinition<T> {
  cards: string[][];
  generate(): T;
}

export default IPokerCardDefinition;