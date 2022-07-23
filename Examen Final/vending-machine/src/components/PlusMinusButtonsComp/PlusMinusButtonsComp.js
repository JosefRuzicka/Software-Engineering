// Adapted from https://codepen.io/angeladelise/pen/zYKpRqE
import React from 'react';
import { useState, useEffect } from 'react';
import './PlusMinusButtonsCompStyle.scss';

export const PlusMinusButtonsComp = () => {
  const [count, setCount] = useState(0);
  const handleAddClick = () => {setCount(count + 1)};
  const handleRemoveClick = () => {
    count > 0 && setCount(count - 1);
  };

  return (
      <div className="button__wrapper">
        <button onClick={handleRemoveClick}>-</button>
        {count}
        <button onClick={handleAddClick}>+</button>
      </div>
  );
}
