import React, { MouseEvent } from 'react';
import Switcher from '../Switcher/Switcher';
import FlexRow from '../../Structure/FlexRow/FlexRow';

export interface SwitcherListProps {
  switcherClicked(event: MouseEvent<HTMLSpanElement, globalThis.MouseEvent>): void
}

const SwitcherList = (props: SwitcherListProps) => {
  return (
    <FlexRow>
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
  )
}

export default SwitcherList;