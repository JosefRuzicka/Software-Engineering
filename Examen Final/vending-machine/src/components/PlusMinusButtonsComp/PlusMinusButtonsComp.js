// Adapted from https://codepen.io/angeladelise/pen/zYKpRqE
import React from 'react';
import './PlusMinusButtonsCompStyle.scss';
import { notifyOutOfStock} from '../NotificationsComp/NotificationsComp';
import { DepositedMoney } from '../../DataBaseSimulator/MoneyData';
import { handleAddButton, handleRemoveButton } from '../../Utils/ButtonHandler';

export const PlusMinusButtonsComp = ({element, reRenderSwitch, setReRenderSwitch}) => {
  const handleAddClick = () => {
    handleAddButton({element, reRenderSwitch, setReRenderSwitch});
  };
  const handleRemoveClick = () => {
    handleRemoveButton({element, reRenderSwitch, setReRenderSwitch});
  };

  return (
      <div className="button__wrapper">
        <button onClick={handleRemoveClick}>-</button>
        {element.inShoppingCart || element.depositedInCurrentTransaction || 0}
        <button onClick={handleAddClick}>+</button>
      </div>
  );
}
