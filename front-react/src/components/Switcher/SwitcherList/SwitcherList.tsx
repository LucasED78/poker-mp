import React, { MouseEvent } from 'react';
import Switcher from '../Switcher/Switcher';
import FlexRow from '../../Structure/FlexRow/FlexRow';
import Paragraph from '../../Paragraph/Paragraph';
import FlexColumn from '../../Structure/FlexColumn/FlexColumn';

export interface SwitcherListProps {
  switcherClicked(event: MouseEvent<HTMLSpanElement, globalThis.MouseEvent>): void
}

const SwitcherList = (props: SwitcherListProps) => {
  return (
    <FlexColumn>
        <>
          <Paragraph horizontalSpace="auto" content="Player 1, choose your card color" />
          <FlexRow style={{ margin: '10px 0' }}>
            <>
              <Switcher 
                switcherColor="navy" 
                switcherLabel="Azul-escuro"
                onColorSelected={props.switcherClicked} />

              <Switcher 
                switcherColor="grey" 
                switcherLabel="Cinza"
                onColorSelected={props.switcherClicked} />
            </>
          </FlexRow>
        </>
    </FlexColumn>
  )
}

export default SwitcherList;