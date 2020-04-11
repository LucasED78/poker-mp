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

const App = () => {
  const pokerRepository = new PokerRepository(new PokerHttp());

  const [player1, setPlayer1] = useState<Player | undefined>(undefined);
  const [player2, setPlayer2] = useState<Player | undefined>(undefined);
  const [player1Color, setPlayer1Color] = useState('');
  const [loading, setLoading] = useState(false);
  const [winner, setWinner] = useState('');
  
  const fetchPlayerCards = async () => {
    setLoading(true);

    const response = await pokerRepository.fetchPlayerCards();

    const { player1, player2 } = response.data;

    setPlayer1(Player.fromJSON(player1));
    setPlayer2(Player.fromJSON(player2));

    setLoading(false);
  }

  const fetchWinnerPlayer = async () => {
    if (player1 && player2) {
      setLoading(true);

      const response = await pokerRepository.fetchWinner([player1?.handInformation, player2?.handInformation]);

      const { winner } = response.data;

      setWinner(winner)
      
      setLoading(false);
    }
  }

  const replayButtonHandler = () => {
    setWinner('');
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
    <Content>
      <PokerTable>
        {
          loading ? renderLoading() : (player1 && player2) ? renderPlayerCards() : renderSwitcher()
        }
      </PokerTable>
    </Content>
  )
};

export default App;