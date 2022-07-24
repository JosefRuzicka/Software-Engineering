import React from "react";
import { MoneyDataBase } from "../../DataBaseSimulator/MoneyData";
import { ProductsDataBase } from "../../DataBaseSimulator/ProductsData";
import { PlusMinusButtonsComp } from '../PlusMinusButtonsComp/PlusMinusButtonsComp';

export const MoneyHandlerComp = ( {reRenderSwitch, setReRenderSwitch} ) => {
  return (
    <div className="MoneyInsertionSlots">
      {MoneyDataBase.map( element => (
        <div> 
          <label> ₡ {element.value} slot</label>
          <PlusMinusButtonsComp 
            element={element} 
            reRenderSwitch={reRenderSwitch}
            setReRenderSwitch={setReRenderSwitch}
          />
        </div>
      ))}
    </div>
  )
}

