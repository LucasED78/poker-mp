import IPokerError from "../IPokerError";

class PokerError implements IPokerError {
  success: boolean = false;
  message: string;

  constructor(message: string) {
    this.message = message;
  }
}

export default PokerError;