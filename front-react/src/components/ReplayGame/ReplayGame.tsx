import React, { MouseEvent } from 'react';
import Button from '../Button/Button';
import FlexColumn from '../Structure/FlexColumn/FlexColumn';
import Paragraph from '../Paragraph/Paragraph';

export interface ReplayGameProps {
  winner: string;
  replayButtonClicked(event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>): void;
}

const ReplayGame = (props: ReplayGameProps) => {
  return (
    <FlexColumn style={{ margin: '50px 0' }}>
      <>
        <Paragraph content={ `${props.winner} is the winner!! Want to play again?` } />

        <Button onClick={props.replayButtonClicked}>replay</Button>
      </>
    </FlexColumn>
  )
}

export default ReplayGame;