import React, { CSSProperties, Component } from 'react';
import classes from './PokerCardList.module.css';
import PokerCard from '../PokerCard/PokerCard';
import Paragraph from '../Paragraph/Paragraph';
import FlexColumn from '../Structure/FlexColumn/FlexColumn';

export interface PokerCardList {
  player: string;
  cards: string[];
  cardColor: string;
  style?: CSSProperties;
  flip?: boolean;
  flipAll?: boolean
}

const PokerCardList = (props: PokerCardList) => {
  return (
    <FlexColumn>
      <>
        <Paragraph horizontalSpace='5px' verticalSpace="10px" content={props.player} />
        
        <div className={classes.PokerCardList} style={props.style}>
          { props.cards && 
            props.cards.map(e => <PokerCard 
              key={`${e} ${Math.random()}`} 
              flip={props.flip} 
              flipAll={props.flipAll}
              cardName={e} 
              backColor={props.cardColor || 'grey'} />) }
        </div>
      </>
    </FlexColumn>
  )
}

export default PokerCardList;