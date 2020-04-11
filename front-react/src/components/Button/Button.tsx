import React, { ReactElement, MouseEvent } from 'react';
import classes from './Button.module.css';

export interface ButtonProps {
  children: ReactElement | string;
  onClick(event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>): void;
}

const Button = (props: ButtonProps) => {
  return (
    <button onClick={props.onClick} className={classes.Button}>
      { props.children }
    </button>
  )
};

export default Button;