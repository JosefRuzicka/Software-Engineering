import React from 'react';
import './ScreenCompStyle.scss'
import { ProductsDataBase } from '../../DataBaseSimulator/ProductsData';
import { calculateTotalCost } from '../../Utils/MathemathicsHandler';
import { MoneyDataBase, DepositedMoney } from '../../DataBaseSimulator/MoneyData';

export const ScreenComp = ({shoppingCart}) => {
  return (
    <div>
      <h3> Shopping cart:</h3>
      <div className='beverage-list'>
        {ProductsDataBase.map (element => (
          element.inShoppingCart > 0 &&
          <p> {element.name}: {element.inShoppingCart}</p>
        ))}
        <p> ----------</p>
        <p> Total Cost: {calculateTotalCost()}</p>
        {DepositedMoney.map(element => (
          <p> Money Deposited: {element.depositedMoney} </p>
        ))}
      </div>
    </div>
  );
}