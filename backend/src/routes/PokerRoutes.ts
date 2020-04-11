import { Router } from "express";
import PokerController from "../controllers/PokerController";

class PokerRoutes {
  router = Router();
  pokerController = new PokerController();

  getRoutes(): Router {
    this.router.get('/', this.pokerController.getHands);
    this.router.post('/winner', this.pokerController.getWinner);

    return this.router;
  }
}

export default PokerRoutes;