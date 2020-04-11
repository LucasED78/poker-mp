class ImageUtil {
  static getCardImage(card: string) {
    if (card.includes('c')) return `club/${card}`;
    else if (card.includes('d')) return `diamond/${card}`;
    else if (card.includes('h')) return `heart/${card}`;

    return `spade/${card}`;
  }
}

export default ImageUtil;