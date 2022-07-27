import { MoneyDataBase } from "../DataBaseSimulator/MoneyData";
import { addDepositedMoneyToStorage, checkMoneyStatus, removeChangeFromStorage, removeItemsFromStorage, removeTransactionValues, getNextChangeCoin, returnChange } from "../Utils/DataBaseHandler";
import { handleAddButton, handleRemoveButton } from "../Utils/ButtonHandler";
import { ProductsDataBase } from "../DataBaseSimulator/ProductsData";

test( 'Remove coins inserted in current transaction', () => {
  const testSubject = MoneyDataBase.find(element => element.id == 0);
  handleAddButton(testSubject, undefined, undefined);
  removeTransactionValues();
  expect(testSubject.depositedInCurrentTransaction).toBe(0);
});

test( 'Remove items bought in current transaction from shopping cart', () => {
  const testSubject = ProductsDataBase.find(element => element.id == 0);
  handleAddButton(testSubject, undefined, undefined);
  removeTransactionValues();
  expect(testSubject.inShoppingCart).toBe(0);
});

test( 'Remove items bought in current transaction from stock', () => {
  const testSubject = ProductsDataBase.find(element => element.id == 0);
  handleAddButton(testSubject, undefined, undefined);
  removeItemsFromStorage();
  expect(testSubject.inStock).toBe(9);
});

test( 'Add deposited coins to storage', () => {
  const testSubject = MoneyDataBase.find(element => element.id == 0);
  testSubject.depositedInCurrentTransaction++;
  addDepositedMoneyToStorage();
  expect(testSubject.count).toBe(26);
});

test( 'Remove change from storage', () => {
  const testSubject = MoneyDataBase.find(element => element.id == 0);
  removeChangeFromStorage([1,0,0,0,0]);
  expect(testSubject.count).toBe(25);
});

test ('Check service status', () => {
  const testSubject = checkMoneyStatus()
  expect(testSubject).toStrictEqual(true);
});

test ('Check out of service status', () => { 
  MoneyDataBase.forEach(element => {element.count = 0});
  const testSubject = checkMoneyStatus()
  expect(testSubject).toStrictEqual(false);
});

test ('Check next coin to be given by machine', () => { 
  MoneyDataBase.forEach(element => {element.count += 1});
  const change = 500;
  const testSubject = getNextChangeCoin(change);
  expect(testSubject.value).toBe(500);
});

test ('Check next coin to be given by machine when the ideal type is out of stock', () => { 
  let testSubject = MoneyDataBase.find(element => element.id == 3);
  testSubject.count--;
  const change = 500;
  testSubject = getNextChangeCoin(change);
  expect(testSubject.value).toBe(100);
});

test ('Check change returned correctedness', () => { 
  const change = 575;
  const testSubject = returnChange(change);
  console.log(testSubject);
  expect(testSubject).toStrictEqual([0,0,5,1,1]);
});