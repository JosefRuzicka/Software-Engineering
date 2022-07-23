import React from 'react';
import './OfferedBeveragesCompStyle.scss';

export const OfferedBeveragesComp = ({beveragesOnStock}) => {
  return (
    <div className='parent'>
      <div className='div1'> 
        <p> Coca Cola </p>
        <p> On stock: {beveragesOnStock[0]} </p>
      </div>
      <div className='div2'> 
        <p> Pepsi </p>
        <p> On stock: {beveragesOnStock[1]} </p>
      </div>
      <div className='div3'> 
        <p> Fanta </p>
        <p> On stock: {beveragesOnStock[2]} </p>
      </div>
      <div className='div4'> 
        <p> Sprite </p>
        <p> On stock: {beveragesOnStock[3]} </p>
      </div>
    </div>
  );
};
