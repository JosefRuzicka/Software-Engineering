import React from "react";
import { MoneyDataBase, DepositedMoney} from "../../DataBaseSimulator/MoneyData";
import { PlusMinusButtonsComp } from '../PlusMinusButtonsComp/PlusMinusButtonsComp';
import './MoneyHandlerCompStyle.scss'
import { calculateTotalCost, handleTransaction } from '../../Utils/MathemathicsHandler';
import { notifyPaymentSuccess } from "../NotificationsComp/NotificationsComp";
import { removeTransactionValues, removeItemsFromStorage } from "../../Utils/DataBaseHandler";

export const MoneyHandlerComp = ( {reRenderSwitch, setReRenderSwitch} ) => {
  const handlePayment = () => {
    let change = handleTransaction();
    if (change >= 0) {
      notifyPaymentSuccess(change);
      removeItemsFromStorage();
      removeTransactionValues();
    }
    setReRenderSwitch( !reRenderSwitch );
  };
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
        <button type="submit" className="glow-on-hover-pay" onClick={() => handlePayment()}>Pay now</button>
      </div>
    </div>
  )
}

