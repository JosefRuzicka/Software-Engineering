// Adapted from https://codepen.io/angeladelise/pen/zYKpRqE
import React from 'react';
import './PlusMinusButtonsCompStyle.scss';
import { notifyOutOfStock} from '../NotificationsComp/NotificationsComp';
import { DepositedMoney, MoneyDataBase } from '../../DataBaseSimulator/MoneyData';

export const PlusMinusButtonsComp = ({element, reRenderSwitch, setReRenderSwitch}) => {
  const handleAddClick = () => {
    element.inShoppingCart < element.inStock ? element.inShoppingCart++ :
    element.category ? DepositedMoney.map(element2 => element2.depositedMoney += element.value ) 
    && element.depositedInCurrentTransaction++ :
    notifyOutOfStock();
    setReRenderSwitch( !reRenderSwitch );
  };
  const handleRemoveClick = () => {
    element.inShoppingCart > 0 ? element.inShoppingCart-- :
    element.depositedInCurrentTransaction > 0 && element.depositedInCurrentTransaction-- 
    && DepositedMoney.map(element2 => element2.depositedMoney -= element.value );
    setReRenderSwitch( !reRenderSwitch );
  };

  return (
      <div className="button__wrapper">
        <button onClick={handleRemoveClick}>-</button>
        {element.inShoppingCart || element.depositedInCurrentTransaction}
        <button onClick={handleAddClick}>+</button>
      </div>
  );
}
