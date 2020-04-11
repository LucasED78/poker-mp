import React, { ReactElement, CSSProperties } from 'react';
import classes from './FlexColumn.module.css';

export interface FlexColumnProps {
  children: ReactElement | string;
  style?: CSSProperties;
}

const FlexColumn = (props: FlexColumnProps) => {
  return (
    <div className={classes.FlexColumn} style={props.style}>
      { props.children }
    </div>
  )
}

export default FlexColumn;