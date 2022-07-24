import React from 'react';
import './OfferedBeveragesCompStyle.scss';
import { PlusMinusButtonsComp } from '../PlusMinusButtonsComp/PlusMinusButtonsComp';
import { ProductsDataBase } from '../../DataBaseSimulator/ProductsData';

export const OfferedBeveragesComp = ( {reRenderSwitch, setReRenderSwitch} ) => {
  return (
    <div className='parent'>
      {ProductsDataBase.map( element => (
        <div className={`div${element.id} divs`}> 
        <label> {element.name} </label>
        <label> In stock: {element.inStock} </label>
        <label> ₡ {element.price} </label>
        <PlusMinusButtonsComp 
          element={element} 
          reRenderSwitch={reRenderSwitch}
          setReRenderSwitch={setReRenderSwitch}/>
      </div>
      ))} 
    </div>
  );
};
