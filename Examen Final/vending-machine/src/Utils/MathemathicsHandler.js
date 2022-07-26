import React from "react";
import { DepositedMoney, MoneyDataBase } from "../DataBaseSimulator/MoneyData";
import { ProductsDataBase } from "../DataBaseSimulator/ProductsData";

export const calculateTotalCost = () => {
  let totalCost = 0;
  ProductsDataBase.forEach(element => {
    element.inShoppingCart > 0 && (totalCost += (element.inShoppingCart * element.price));   
  });
  return totalCost;
};

export const handleTransaction = () => {
  let change = 0;
  DepositedMoney.map(element => change = (element.depositedMoney - calculateTotalCost()))
  return change;
}