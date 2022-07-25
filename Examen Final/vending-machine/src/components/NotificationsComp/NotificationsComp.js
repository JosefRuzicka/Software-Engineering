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