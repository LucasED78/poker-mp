import React, { ReactElement } from 'react';
import classes from './PokerTable.module.css';

export interface PokerTableProps {
  children: ReactElement | string;
}

const PokerTable = (props: PokerTableProps) => {
  return (
    <div className={classes.PokerTable}>
      { props.children }
    </div>
  )
};

export default PokerTable;