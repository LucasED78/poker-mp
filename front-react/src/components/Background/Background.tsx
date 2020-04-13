import React from 'react';
import classes from './Background.module.css';

export interface BackgroundProps {
  img: string;
}

const Background = (props: BackgroundProps) => {
  const img = props.img ? require('../../assets/poker-bg.jpg').default : require('../../assets/poker-bg.jpg').default;
  
  return (
    <div 
    style={{backgroundImage: `url(${img})`}}
    className={classes.Background}></div>
  )
}

export default Background;