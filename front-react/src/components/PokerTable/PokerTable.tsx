import React, { ReactElement, useEffect, useRef } from 'react';
import classes from './PokerTable.module.css';
import { fadeInDown } from '../../global.css';

export interface PokerTableProps {
  children: ReactElement | string;
}

const PokerTable = (props: PokerTableProps) => {


  return (
    <div className={[classes.PokerTable, fadeInDown].join(' ')}>
      { props.children }
    </div>
  )
};

export default PokerTable;