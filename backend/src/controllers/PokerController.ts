import { Request, Response, NextFunction } from 'express';
import PokerCardDefinition from '../models/PokerCardDefinition/impl/PokerCardDefinition';
import PokerEvaluator from 'poker-evaluator';
import shuffle from '../utils/randomize';
import PokerError from '../core/impl/PokerError';
import PokerResponse from '../core/impl/PokerResponse';

class PokerController {
  async getHands(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const pokerDefinition = new PokerCardDefinition();
      const cards = pokerDefinition.generate().suits.map(e => e.card).reduce((prev, cur) => [...prev, ...cur]);
      const shuffledCards = shuffle(cards) as string[];

      const response = [...Array(2)].map(e => {
        const hand =  [...Array(5)].map(_ => shuffledCards.pop()) as string[];
        
        const data = PokerEvaluator.evalHand(hand);

        return { hand, data }
      })

      const [player1, player2] = response;

      res.send(new PokerResponse({
        player1,
        player2
      }));
    } catch(e){
      res.send(new PokerError("can't draw any hands"))
    }
  }

  async getWinner(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const [ player1Hand, player2Hand ] = req.body;

      const winner = player1Hand.value > player2Hand.value ? 'player1' : 'player2';

      res.send(new PokerResponse({ winner }));
    }catch(e){
      res.send(new PokerError("can't select a winner"))
    }
  }
}

export default PokerController;