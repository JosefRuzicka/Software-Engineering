import React from 'react';
import './OfferedBeveragesCompStyle.scss';
import { PlusMinusButtonsComp } from '../PlusMinusButtonsComp/PlusMinusButtonsComp';

export const OfferedBeveragesComp = ({beveragesOnStock}) => {
  return (
    <div className='parent'>
      <div className='div1'> 
        <p> Coca Cola </p>
        <p> In stock: {beveragesOnStock[0]} </p>
        <PlusMinusButtonsComp/>
      </div>
      <div className='div2'> 
        <p> Pepsi </p>
        <p> In stock: {beveragesOnStock[1]} </p>
        <PlusMinusButtonsComp/>
      </div>
      <div className='div3'> 
        <p> Fanta </p>
        <p> In stock: {beveragesOnStock[2]} </p>
        <PlusMinusButtonsComp/>
      </div>
      <div className='div4'> 
        <p> Sprite </p>
        <p> In stock: {beveragesOnStock[3]} </p>
        <PlusMinusButtonsComp/>
      </div>
    </div>
  );
};
