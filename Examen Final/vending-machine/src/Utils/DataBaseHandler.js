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

export const returnChange = (change) => {
  let billsWorth1000 = 0;
	let coinsWorth500 = 0;
	let coinsWorth100 = 0;
	let coinsWorth50 = 0;	
	let coinsWorth25 = 0;
  let changeByCoins = [];
  while (change > 0) {
    let currentElement = getNextChangeCoin(change);
    if (typeof currentElement !== 'undefined'){
      currentElement.value === 1000 ? billsWorth1000++ : currentElement.value === 500 ? coinsWorth500++ : currentElement.value === 100 ? coinsWorth100++ :
      currentElement.value === 50 ? coinsWorth50++ : coinsWorth25++; 
      change -= currentElement.value;
    }
  }
  if (change == 0) {
    changeByCoins.push(billsWorth1000,coinsWorth500,coinsWorth100,coinsWorth50,coinsWorth25);
  }
  return changeByCoins
};

const getNextChangeCoin = (change) => {
  let currentElement;
  change >= 1000 && MoneyDataBase.find(element => (element.value === 1000 && element.count > 0 && (currentElement = element)));
  change >= 500 && typeof currentElement === 'undefined' && MoneyDataBase.find(element => (element.value === 500 && element.count > 0 && (currentElement = element)));
  change >= 100 && typeof currentElement === 'undefined' && MoneyDataBase.find(element => (element.value === 100 && element.count > 0 && (currentElement = element)));
  change >= 50 && typeof currentElement === 'undefined' && MoneyDataBase.find(element => (element.value === 50 && element.count > 0 && (currentElement = element)));
  change >= 25 && typeof currentElement === 'undefined' && MoneyDataBase.find(element => (element.value === 25 && element.count > 0 && (currentElement = element)));
  return currentElement;
};