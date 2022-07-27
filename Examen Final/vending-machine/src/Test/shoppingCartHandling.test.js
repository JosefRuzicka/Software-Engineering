import { handleAddButton, handleRemoveButton } from "../Utils/ButtonHandler";
import { ProductsDataBase } from '../DataBaseSimulator/ProductsData';

test( 'Adds item to shopping cart', () => {
  const testSubject = ProductsDataBase.find(element => element.id == 0);
  handleAddButton(testSubject, undefined, undefined);
  expect(testSubject.inShoppingCart).toBe(1);
});

test( 'Remove item to shopping cart', () => {
  const testSubject = ProductsDataBase.find(element => element.id == 0);
  handleRemoveButton(testSubject, undefined, undefined);
  expect(testSubject.inShoppingCart).toBe(0);
});