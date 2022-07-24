import React from 'react';
import './ScreenCompStyle.scss'
import { ProductsDataBase } from '../../DataBaseSimulator/ProductsData';

export const ScreenComp = ({shoppingCart}) => {
  let totalCost = 2325;
  const calculateTotalCost = () => {
    let totalCost = ((shoppingCart[0] * 500)
                    +(shoppingCart[1] * 600)
                    +(shoppingCart[2] * 550)
                    +(shoppingCart[3] * 725))
    return totalCost
  };
  return (
    <div>
      <h3> Shopping cart:</h3>
      <div className='beverage-list'>
        {ProductsDataBase.map (element => (
          <p> {element.name}: {element.inShoppingCart}</p>
        ))}
        <p> ----------</p>
        <p> Total Cost: {totalCost}</p>
      </div>
    </div>
  );
}