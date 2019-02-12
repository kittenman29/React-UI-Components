import React from 'react';
import './App.css';
import ActionButton from './components/ButtonComponents/ActionButton'
import NumberButton from './components/ButtonComponents/NumberButton'
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'

import {
  Key1,
  Key2,
  Key3, 
  Key4,
  Key5,
  Key6,
  Key7,
  Key8,
  Key9,
  Key0,
  Clear,
  OtherNumberButton,
} from './components/ButtonComponents/NumberButton'

import {
  Divide,
  Multiply,
  Subtract,
  Add,
  Sum,
} from './components/ButtonComponents/ActionButton'


const App = () => {
  return (
    <div className="container">
      <CalculatorDisplay />
      <OtherNumberButton otherNumberProps={Clear} />
      <ActionButton actionOnProps={Divide} />
      <NumberButton numberOnProps={Key7} />
      <NumberButton numberOnProps={Key8} />
      <NumberButton numberOnProps={Key9} />
      <ActionButton actionOnProps={Multiply} />
      <NumberButton numberOnProps={Key4} />
      <NumberButton numberOnProps={Key5} />
      <NumberButton numberOnProps={Key6} />
      <ActionButton actionOnProps={Subtract} />
      <NumberButton numberOnProps={Key1} />
      <NumberButton numberOnProps={Key2} />
      <NumberButton numberOnProps={Key3} />
      <ActionButton actionOnProps={Add} />
      <OtherNumberButton otherNumberProps={Key0} />
      <ActionButton actionOnProps={Sum} />
    </div>
  );
};

export default App;
