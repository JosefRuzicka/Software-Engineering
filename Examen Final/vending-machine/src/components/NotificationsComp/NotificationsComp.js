// Adapted from https://www.npmjs.com/package/react-toastify
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notifyOutOfStock = () => toast.error('Item out of stock!', {
  position: "top-right",
  autoClose: 3500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  }
);

export const notifyPaymentSuccess = (change) => toast.success(`Payment Successful! Your change is: ₡ ${change}`, {
  position: "top-right",
  autoClose: 3500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  }
);

export const notifyPaymentFailure = (change) => toast.error(`Insufficient Funds! missing: ₡ ${change}`, {
  position: "top-right",
  autoClose: 3500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  }
);

export const notifyTransactionCanceled = () => toast.info(`TransactionCanceled!`, {
  position: "top-right",
  autoClose: 3500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  }
);

export const notifyChangeReturned = (changeReturned) => {
  const currencyTypes = ['1000 bills', '500 coins', '100 coins', '50 coins', '25 coins'];
  for (let index = 0; index < changeReturned.length; index++) {
    if (changeReturned[index] > 0) {
      notifyChangeReturnedByCurrencyType(changeReturned[index], currencyTypes[index]);
    }
  }
}

export const notifyChangeReturnedByCurrencyType = (changeReturned, value) => toast.info(<><p>Returned:</p> 
                                                                                      <p>{changeReturned} ₡ {value}</p></>,{
  position: "top-right",
  autoClose: 3500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  }
);

export const notifyNotEnoughChange = () => toast.error(<><p>Machine out of change.</p> 
                                                         <p>Please pay exact price.</p></>,{
position: "top-right",
autoClose: 3500,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
}
);

export const notifyOutOfService = () => toast.error('Machine out of service!', {
  position: "top-right",
  autoClose: false,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  }
);

export const NotificationsComp = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={3500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      //limit={3}
      theme="colored"
    />
  )
};