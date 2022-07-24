import React from 'react';
import './OfferedBeveragesCompStyle.scss';
import { PlusMinusButtonsComp } from '../PlusMinusButtonsComp/PlusMinusButtonsComp';
import { ProductsDataBase } from '../../DataBaseSimulator/ProductsData';

export const OfferedBeveragesComp = ( {reRenderSwitch, setReRenderSwitch} ) => {
  return (
    <div className='BeverageDivParent'>
      {ProductsDataBase.map( element => (
        <div className={`div${element.id} divs`}> 
        <img className='logo' src={`../../../assets/${element.logo}`} ></img>
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
