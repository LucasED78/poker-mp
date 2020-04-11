import React from 'react';
import classes from './Paragraph.module.css';

export interface ParagraphProps {
  content: string;
  verticalSpace?: string;
  horizontalSpace?: string;
}

const Paragraph = (props: ParagraphProps) => {
  return (
    <p
      style={{ margin: `${props.verticalSpace ?? 10} ${props.horizontalSpace ?? 0}` }} 
      className={classes.Paragraph}>
      { props.content }
    </p>
  )
}

export default Paragraph;