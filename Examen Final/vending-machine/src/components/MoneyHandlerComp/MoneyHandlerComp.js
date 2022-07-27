import React from "react";
import { MoneyDataBase } from "../../DataBaseSimulator/MoneyData";
import { PlusMinusButtonsComp } from '../PlusMinusButtonsComp/PlusMinusButtonsComp';
import './MoneyHandlerCompStyle.scss'
import { handleTransaction } from '../../Utils/MathemathicsHandler';
import { notifyPaymentSuccess, notifyPaymentFailure, notifyTransactionCanceled, notifyChangeReturned, notifyNotEnoughChange, notifyOutOfService } from "../NotificationsComp/NotificationsComp";
import { removeTransactionValues, removeItemsFromStorage, addDepositedMoneyToStorage, returnChange, removeChangeFromStorage, checkMoneyStatus } from "../../Utils/DataBaseHandler";

export const MoneyHandlerComp = ({ reRenderSwitch, setReRenderSwitch }) => {
  const handlePayment = () => {
    let change = handleTransaction();
    if (change >= 0) {
      let changeReturned = returnChange(change);
      console.log(changeReturned);
      if (changeReturned.length > 0) {
        notifyPaymentSuccess(change);
        notifyChangeReturned(changeReturned);
        removeItemsFromStorage();
        addDepositedMoneyToStorage();
        removeChangeFromStorage(changeReturned);
        removeTransactionValues();
        if (!checkMoneyStatus()) { notifyOutOfService(); }
      }
      else {
        notifyNotEnoughChange();
      }
    } else {
      change *= -1
      notifyPaymentFailure(change);
    }
    setReRenderSwitch(!reRenderSwitch);
  };

  const handleCancel = () => {
    removeTransactionValues();
    notifyTransactionCanceled();
    setReRenderSwitch(!reRenderSwitch);
  };

  return (
    <>
      <div className="MoneyInsertionSlots">
        <h3 className="title"> Pay here! </h3>
        {MoneyDataBase.map(element => (
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
      <div className="payCancelButtons">
        <button type="submit" className="glow-on-hover-cancel" onClick={() => handleCancel()} >Cancel </button>
        <button type="submit" className="glow-on-hover-pay" onClick={() => handlePayment()}>Pay now</button>
      </div>
    </>
  )
}

