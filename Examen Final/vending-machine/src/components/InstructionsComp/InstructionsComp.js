import React from "react";
import './InstructionsCompStyle.css';

export const InstructionsComp = () => {
  return (
    <div >
      <h3 className='title' >Machine usage instructions:</h3>
      <div className='list listBody'>
        <div className="listDivs">
          <p> Select desired beverages. </p>
        </div>
        <div className="listDivs">
          <p> Deposit amount of money required. </p>
        </div>
        <div className="listDivs">
          <p> Click "Pay now" when ready to complete your order. </p>
        </div>
      </div>  
    </div>
  );
}