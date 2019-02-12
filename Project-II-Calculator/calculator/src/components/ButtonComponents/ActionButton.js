import React from 'react';
import './Button.css';


  const Divide = {
    perform: '/'
  };
  const Multiply = {
    perform: 'x'
  };
  const Subtract = {
    perform: '-'
  };
  const Add = {
    perform: '+'
  };
  const Sum = {
    perform: '='
  };
  


const ActionButton = props => {
    return (
        <div className='action-button'>
            {props.actionOnProps.perform}
        </div>
    );
}

export default ActionButton;

export {Divide};
export {Multiply};
export {Subtract};
export {Add};
export {Sum};