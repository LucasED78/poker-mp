import React, { MouseEvent } from 'react';
import classes from './Switcher.module.css';
import Paragraph from '../../Paragraph/Paragraph';

export interface SwitcherProps {
  switcherColor: string;
  switcherLabel: string;
  onColorSelected(event: MouseEvent<HTMLSpanElement, globalThis.MouseEvent>): void;
}

const Switcher = (props: SwitcherProps) => {
  return (
    <div className={classes.Switcher}>
      <span 
        className={classes.Switcher__color} 
        style={{ backgroundColor: props.switcherColor }}
        onClick={props.onColorSelected}></span>
        
      <Paragraph content={props.switcherLabel}/>
    </div>
  )
}

export default Switcher;