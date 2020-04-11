import React, { ReactElement, CSSProperties } from 'react';
import classes from './FlexRow.module.css';

export interface FlexRowProps {
  children: ReactElement | string;
  style?: CSSProperties;
}

const FlexRow = (props: FlexRowProps) => {
  return (
    <div className={classes.FlexRow} style={props.style}>
      { props.children }
    </div>
  )
}

export default FlexRow;