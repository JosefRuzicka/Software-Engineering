// Adapted from https://codepen.io/angeladelise/pen/zYKpRqE
import React from 'react';
import { useState } from 'react';
import './PlusMinusButtonsCompStyle.scss';

export const PlusMinusButtonsComp = ({element, reRenderSwitch, setReRenderSwitch}) => {
  const handleAddClick = () => {
    element.inShoppingCart <= element.inShoppingCart && element.inShoppingCart++;
    setReRenderSwitch( !reRenderSwitch );
  };
  const handleRemoveClick = () => {
    element.inShoppingCart > 0 && element.inShoppingCart--;
    setReRenderSwitch( !reRenderSwitch );
  };

  return (
      <div className="button__wrapper">
        <button onClick={handleRemoveClick}>-</button>
        {element.inShoppingCart}
        <button onClick={handleAddClick}>+</button>
      </div>
  );
}
