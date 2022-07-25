import React from "react";
import { MoneyDataBase, DepositedMoney} from "../../DataBaseSimulator/MoneyData";
import { PlusMinusButtonsComp } from '../PlusMinusButtonsComp/PlusMinusButtonsComp';
import './MoneyHandlerCompStyle.scss'
import { calculateTotalCost, handleTransaction } from '../../Utils/MathemathicsHandler';
import { notifyPaymentSuccess, notifyPaymentFailure, notifyTransactionCanceled } from "../NotificationsComp/NotificationsComp";
import { removeTransactionValues, removeItemsFromStorage, addDepositedMoneyToStorage } from "../../Utils/DataBaseHandler";

export const MoneyHandlerComp = ( {reRenderSwitch, setReRenderSwitch} ) => {
  const handlePayment = () => {
    let change = handleTransaction();
    if (change >= 0) {
      notifyPaymentSuccess(change);
      removeItemsFromStorage();
      addDepositedMoneyToStorage();
      removeTransactionValues();
      // todo vuelto en monedas
    } else {
      change *= -1
      notifyPaymentFailure(change);
    }
    setReRenderSwitch( !reRenderSwitch );
  };

  const handleCancel = () => {
    removeItemsFromStorage();
    removeTransactionValues();
    notifyTransactionCanceled();
    // todo vuelto en monedas
    setReRenderSwitch( !reRenderSwitch );
  };

  return (
    <div className="MoneyInsertionSlots">
      <h3 className="title"> Pay here! </h3>
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
        <button type="submit" className="glow-on-hover-cancel" onClick={() => handleCancel()} >Cancel </button>
        <button type="submit" className="glow-on-hover-pay" onClick={() => handlePayment()}>Pay now</button>
      </div>
    </div>
  )
}

