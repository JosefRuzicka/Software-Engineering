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