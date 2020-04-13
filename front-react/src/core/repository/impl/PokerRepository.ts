import IPokerRepository from "../IPokerRepository";
import PokerHttpResponseImpl from "../../http/impl/PokerHttpResponseImpl";
import HandInformation from "../../models/HandInformation";
import IPokerHttp from "../../http/IPokerHttp";
import PokerHttpErrorImpl from "../../http/impl/PokerHttpErrorImpl";

class PokerRepository implements IPokerRepository {
  pokerHttp: IPokerHttp<PokerHttpResponseImpl>;

  constructor(pokerHttp: IPokerHttp<PokerHttpResponseImpl>){
    this.pokerHttp = pokerHttp;
  }

  fetchPlayerCards = async (): Promise<PokerHttpResponseImpl> => {
    try {
      return await this.pokerHttp.get('/poker');
    } catch(e){
      throw new PokerHttpErrorImpl('Sorry, an error ocurred when trying to fetch the player hands');
    }
  }

  fetchWinner = async (handInformation: HandInformation[]): Promise<PokerHttpResponseImpl> => {
    try {
      return await this.pokerHttp.post('/poker/winner', handInformation);
    } catch(e){
      throw new PokerHttpErrorImpl('Sorry, an error ocurred when trying to fetch the winner hand');
    }
  }
  
}

export default PokerRepository;