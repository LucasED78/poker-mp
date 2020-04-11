import IPokerRepository from "../IPokerRepository";
import PokerHttpResponseImpl from "../../http/impl/PokerHttpResponseImpl";
import HandInformation from "../../models/HandInformation";
import IPokerHttp from "../../http/IPokerHttp";

class PokerRepository implements IPokerRepository {
  pokerHttp: IPokerHttp<PokerHttpResponseImpl>;

  constructor(pokerHttp: IPokerHttp<PokerHttpResponseImpl>){
    this.pokerHttp = pokerHttp;
  }

  fetchPlayerCards = async (): Promise<PokerHttpResponseImpl> => {
    return await this.pokerHttp.get('/poker');
  }

  fetchWinner = async (handInformation: HandInformation[]): Promise<PokerHttpResponseImpl> => {
    return await this.pokerHttp.post('/poker/winner', handInformation);
  }
  
}

export default PokerRepository;