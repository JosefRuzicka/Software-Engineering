import React from "react";
import { ProductsDataBase } from "../DataBaseSimulator/ProductsData";

export const calculateTotalCost = () => {
  let totalCost = 0;
  ProductsDataBase.forEach(element => {
    element.inShoppingCart > 0 && (totalCost += (element.inShoppingCart * element.price));   
  });
  return totalCost
};