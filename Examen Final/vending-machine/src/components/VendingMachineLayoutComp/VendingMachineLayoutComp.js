import React from 'react';
import { OfferedBeveragesComp } from '../OfferedBeveragesComp/OfferedBeveragesComp';

export const VendingMachineLayoutComp = () => {
  return (
    <div className='parent'>
      <div className='div1'> <OfferedBeveragesComp beveragesOnStock={[10,8,10,15]} /> </div>
      <div className='div2'> </div>
      <div className='div3'> </div>
      <div className='div4'> </div>
    </div>
  );
};
