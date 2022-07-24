import React from 'react';
import { OfferedBeveragesComp } from '../OfferedBeveragesComp/OfferedBeveragesComp';
import { ScreenComp } from '../ScreenComp/ScreenComp';
import './VendingMachineLayoutCompStyle.scss';
import { useState } from 'react';
import { MoneyHandlerComp } from '../MoneyHandlerComp/MoneyHandlerComp';

export const VendingMachineLayoutComp = () => {
  const [reRenderSwitch, setReRenderSwitch] = useState( false );
  return (
    <div className='parent'>
      <div className='div0Layout divs'> <OfferedBeveragesComp 
        reRenderSwitch={reRenderSwitch} 
        setReRenderSwitch={setReRenderSwitch}/>
      </div>
      <div className='div1Layout divs'> <ScreenComp /></div>
      <div className='div2Layout divs'> </div>
      <div className='div3Layout divs'> <MoneyHandlerComp
        reRenderSwitch={reRenderSwitch} 
        setReRenderSwitch={setReRenderSwitch}/>
      </div>
    </div>
  );
};
