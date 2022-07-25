import { DepositedMoney, MoneyDataBase } from "../DataBaseSimulator/MoneyData";
import { ProductsDataBase } from "../DataBaseSimulator/ProductsData";

export const removeTransactionValues = () => {
  {ProductsDataBase.forEach(element => {
    element.inShoppingCart = 0;
    console.log(element.inShoppingCart)
  })}
  {MoneyDataBase.forEach(element => {
    element.depositedInCurrentTransaction = 0;
  })}
  {DepositedMoney.map(element => element.depositedMoney = 0)};
};

export const removeItemsFromStorage = () => {
  {ProductsDataBase.forEach(element => {
    element.inStock -= element.inShoppingCart;
  })}
};

export const addDepositedMoneyToStorage = () => {
  {MoneyDataBase.forEach(element => {
    element.count += element.depositedInCurrentTransaction;
  })}
};