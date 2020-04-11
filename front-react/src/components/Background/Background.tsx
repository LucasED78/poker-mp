import React from 'react';
import classes from './Background.module.css';
import img from '../../assets/poker-bg.jpg';

export interface BackgroundProps {
  img: string;
}

const Background = (props: BackgroundProps) => {
  return (
    <div 
    style={{backgroundImage: `url(${props.img || img})`}}
    className={classes.Background}></div>
  )
}

export default Background;