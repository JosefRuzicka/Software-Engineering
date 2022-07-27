import { DepositedMoney, MoneyDataBase } from "../DataBaseSimulator/MoneyData";
import { ProductsDataBase } from "../DataBaseSimulator/ProductsData";
import { calculateTotalCost, handleTransaction } from "../Utils/MathemathicsHandler";
import { handleAddButton, handleRemoveButton } from "../Utils/ButtonHandler";

test( 'Calculates total cost.', () => {
  const testSubject = calculateTotalCost();
  expect(testSubject).toBe(0);
});

test( 'Adds item to shopping cart with many items.', () => {
  ProductsDataBase.forEach(element => element.inShoppingCart++);
  const testSubject = calculateTotalCost();
  expect(testSubject).toBe(2375);
});

test( 'Calculates total change.', () => {
  const testSubject = handleTransaction();
  expect(testSubject).toBe(-2375);
});

test( 'Calculates total change after paying for many items.', () => {
  DepositedMoney.map(element => element.depositedMoney = 3000 );
  const testSubject = handleTransaction();
  expect(testSubject).toBe(625);
});

test( 'Adds coins deposited by user.', () => {
  const testSubject = MoneyDataBase.find(element => element.id == 0);
  handleAddButton(testSubject, undefined, undefined);
  expect(testSubject.depositedInCurrentTransaction).toBe(1);
});

test( 'Removes coins deposited by user.', () => {
  const testSubject = MoneyDataBase.find(element => element.id == 0);
  handleRemoveButton(testSubject, undefined, undefined);
  expect(testSubject.depositedInCurrentTransaction).toBe(0);
});


