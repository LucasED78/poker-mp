import React, { ReactElement } from 'react';
import classes from './FlexRow.module.css';

export interface FlexRowProps {
  children: ReactElement | string;
}

const FlexRow = (props: FlexRowProps) => {
  return (
    <div className={classes.FlexRow}>
      { props.children }
    </div>
  )
}

export default FlexRow;