import IPokerHttpError from "../IPokerHttpError";

class PokerHttpErrorImpl implements IPokerHttpError {
  success: boolean = false;
  message: string;

  constructor(message: string) {
    this.message = message;
  }
}

export default PokerHttpErrorImpl;