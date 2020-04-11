import React, { ReactElement } from 'react';
import classes from './Content.module.css';

export interface ContentProps {
  children: ReactElement | string;
}

const Content = (props: ContentProps) => {
  return (
    <div className={classes.Content}>
      { props.children }
    </div>
  )
}

export default Content;