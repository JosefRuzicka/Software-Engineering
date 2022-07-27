import { notifyOutOfStock} from '../components/NotificationsComp/NotificationsComp';
import { DepositedMoney } from '../DataBaseSimulator/MoneyData';

export const handleAddButton = (element, reRenderSwitch, setReRenderSwitch) => {
  element.inShoppingCart < element.inStock ? element.inShoppingCart++ :
  element.category ? DepositedMoney.map(element2 => element2.depositedMoney += element.value ) 
  && element.depositedInCurrentTransaction++ :
  notifyOutOfStock();
  setReRenderSwitch !== undefined && setReRenderSwitch( !reRenderSwitch );
};

export const handleRemoveButton = (element, reRenderSwitch, setReRenderSwitch) => {
  element.inShoppingCart > 0 ? element.inShoppingCart-- :
  element.depositedInCurrentTransaction > 0 && element.depositedInCurrentTransaction-- 
  && DepositedMoney.map(element2 => element2.depositedMoney -= element.value );
  setReRenderSwitch !== undefined && setReRenderSwitch( !reRenderSwitch );
};