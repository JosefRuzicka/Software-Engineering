// Adapted from https://codepen.io/angeladelise/pen/zYKpRqE
import React from 'react';
import './PlusMinusButtonsCompStyle.scss';
import { notifyOutOfStock} from '../NotificationsComp/NotificationsComp';

export const PlusMinusButtonsComp = ({element, reRenderSwitch, setReRenderSwitch}) => {
  const handleAddClick = () => {
    element.inShoppingCart < element.inStock ?
     element.inShoppingCart++ : notifyOutOfStock();
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
