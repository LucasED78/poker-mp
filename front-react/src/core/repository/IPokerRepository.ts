import HandInformation from "../models/HandInformation";

interface IPokerRepository {
  fetchPlayerCards(): Promise<IPokerHttpResponse>;
  fetchWinner(handInformation: HandInformation[]): Promise<IPokerHttpResponse>;
}

export default IPokerRepository;