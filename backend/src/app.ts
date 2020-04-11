import express from 'express';
import PokerRoutes from './routes/PokerRoutes';
import cors from 'cors';

class Application {
  app = express();

  init(){
    this.middlewares();
    this.app.listen(process.env.PORT || 9000, () => console.log('server started...'))
  }

  middlewares(){
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use('/poker', new PokerRoutes().getRoutes());
  }
}

export default Application;