import express from 'express';
import PokerRoutes from './routes/PokerRoutes';

class Application {
  app = express();

  init(){
    this.middlewares();
    this.app.listen(process.env.PORT || 3000, () => console.log('server started...'))
  }

  middlewares(){
    this.app.use(express.json());
    this.app.use('/poker', new PokerRoutes().getRoutes());
  }
}

export default Application;