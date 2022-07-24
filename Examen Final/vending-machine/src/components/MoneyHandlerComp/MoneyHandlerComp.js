import React from "react";
import { MoneyDataBase } from "../../DataBaseSimulator/MoneyData";
import { PlusMinusButtonsComp } from '../PlusMinusButtonsComp/PlusMinusButtonsComp';
import './MoneyHandlerCompStyle.scss'

export const MoneyHandlerComp = ( {reRenderSwitch, setReRenderSwitch} ) => {
  return (
    <div className="MoneyInsertionSlots">
      <h3> Pay here! </h3>
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
      <div className="payCancelButtons">
        <button type="submit" className="glow-on-hover-cancel" onClick={null} >Cancel </button>
        <button type="submit" className="glow-on-hover-pay" onClick={null}>Pay now</button>
      </div>
    </div>
  )
}

