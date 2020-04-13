import React, { useState, MouseEvent } from 'react';
import PokerTable from './components/PokerTable/PokerTable';
import Content from './components/Content/Content';
import PokerCardList from './components/PokerCardList/PokerCardList';
import PokerHttp from './core/http/impl/PokerHttp';
import Player from './core/models/Player';
import SwitcherList from './components/Switcher/SwitcherList/SwitcherList';
import PokerRepository from './core/repository/impl/PokerRepository';
import ReplayGame from './components/ReplayGame/ReplayGame';
import Button from './components/Button/Button';
import Loading from './components/Loading/Loading';
import Background from './components/Background/Background';
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const pokerRepository = new PokerRepository(new PokerHttp());

  const [player1, setPlayer1] = useState<Player | undefined>(undefined);
  const [player2, setPlayer2] = useState<Player | undefined>(undefined);
  const [player1Color, setPlayer1Color] = useState('');
  const [loading, setLoading] = useState(false);
  const [winner, setWinner] = useState('');
  
  const fetchPlayerCards = async () => {
    setLoading(true);

    try {
      const response = await pokerRepository.fetchPlayerCards();

      const { player1, player2 } = response.data;

      setPlayer1(Player.fromJSON(player1));
      setPlayer2(Player.fromJSON(player2));

      setLoading(false);
    }catch({ message }){
      setLoading(false);
      toast.error(message)
    }
  }

  const fetchWinnerPlayer = async () => {
    if (player1 && player2) {
      setLoading(true);

      try {
        const response = await pokerRepository.fetchWinner([player1?.handInformation, player2?.handInformation]);

        const { winner } = response.data;

        setWinner(winner)
        
        setLoading(false);

        const { handName, value } = player1.handInformation;
        const { handName: p2HandName, value: p2Value } = player2.handInformation;

        toast.success(
          `The ${winner} is the winner, with a ${handName} and hand-value of ${value} over a
          ${p2HandName} with hand-value of ${p2Value}`
        );
      }catch({ message }){
        setLoading(false);
        toast.error(message);
      }
    }
  }

  const replayButtonHandler = () => {
    setWinner('');
    toast.dismiss();
    fetchPlayerCards();
  }

  const switcherClickedHandler = (e: MouseEvent<HTMLSpanElement, globalThis.MouseEvent>) => {
    const { currentTarget: element } = e;

    setPlayer1Color(element.style.backgroundColor);
    fetchPlayerCards();
  }

  const renderSwitcher = (): JSX.Element => {
    return <SwitcherList switcherClicked={switcherClickedHandler} />
  }

  const renderLoading = (): JSX.Element => {
    return <Loading />
  }

  const renderPlayerCards = (): JSX.Element => {
    return (
      <>
        {
          player2 &&  (
            <PokerCardList 
              player='PLAYER 2'
              cardColor={player1Color == 'grey' ? 'navy' : 'grey'} 
              flipAll={winner.length > 0} 
              cards={player2.cards.cards} />
          )
        }

        {
          winner.length > 0 ? <ReplayGame winner={winner} replayButtonClicked={replayButtonHandler} /> : 
          <Button onClick={_ => fetchWinnerPlayer()}>Who has the better hand?</Button>
        }

        {
          player1 && (
            <PokerCardList
              player='PLAYER 1' 
              cardColor={player1Color} 
              flip={winner.length == 0} 
              flipAll={winner.length > 0} 
              cards={player1.cards.cards} />
          )
        }
      </>
    )
  }

  return (
    <>
      <ToastContainer className="toast-container" toastClassName="dark-toast" />
      <Background img="../../assets/poker-bg.jpg" />
      <Content>
        <PokerTable>
          {
            loading ? renderLoading() : (player1 && player2) ? renderPlayerCards() : renderSwitcher()
          }
        </PokerTable>
      </Content>
    </>
  )
};

export default App;