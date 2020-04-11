import React, { MouseEvent } from 'react';
import classes from './PokerCard.module.css';
import ImageUtil from '../../utils/ImageUtil';


export interface PokerCardProps {
  backColor: string;
  cardName?: string;
  flip?: boolean;
  flipAll?: boolean;
}

const PokerCard = (props: PokerCardProps) => {
  const cardName = ImageUtil.getCardImage(props.cardName ?? '');
  const img = !props.flipAll ? require(`../../assets/card-${props.backColor}.png`).default 
  : require(`../../assets/suits/${cardName}.png`).default

  const onClickHandler = (e: MouseEvent<HTMLImageElement, globalThis.MouseEvent>) => {
    const { currentTarget: element } = e;

    if (props.flip) {
      if (!e.currentTarget.style.transform) {
        element.style.transform = 'rotate(360deg)';
  
        if (props.cardName) {
          const name = ImageUtil.getCardImage(props.cardName);
          element.src = require(`../../assets/suits/${name}.png`).default
        }
        
        return;
      }
  
      element.style.transform = '';
      element.src = require(`../../assets/card-${props.backColor}.png`).default
    }
  }
  
  return (
    <img 
      src={img} 
      className={classes.PokerCard} 
      alt={`poker card ${props.backColor}`}
      onClick={onClickHandler} />
  )
};

export default PokerCard;