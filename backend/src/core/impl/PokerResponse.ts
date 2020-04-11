import IPokerResponse from "../IPokerResponse";

class PokerResponse implements IPokerResponse {
  success: boolean = true;
  data: any;

  constructor(data: any) {
    this.data = data;
  }
}

export default PokerResponse;