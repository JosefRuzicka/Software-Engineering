import React from 'react';
import { OfferedBeveragesComp } from '../OfferedBeveragesComp/OfferedBeveragesComp';
import { ScreenComp } from '../ScreenComp/ScreenComp';
import '../OfferedBeveragesComp/OfferedBeveragesCompStyle.scss';
import { useState } from 'react';

export const VendingMachineLayoutComp = () => {
  const [reRenderSwitch, setReRenderSwitch] = useState( false );
  return (
    <div className='parent'>
      <div className='div0 divs'> <OfferedBeveragesComp 
        reRenderSwitch={reRenderSwitch} 
        setReRenderSwitch={setReRenderSwitch}/>
      </div>
      <div className='div1 divs'> <ScreenComp /></div>
      <div className='div2 divs'> </div>
      <div className='div3 divs'> </div>
    </div>
  );
};
