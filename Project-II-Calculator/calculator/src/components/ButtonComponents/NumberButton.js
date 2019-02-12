import React from 'react';
import './Button.css';

const Key1 = {
    number: '1'
  };
const Key2 = {
    number: '2'
  };
const Key3 = {
    number: '3'
  };
const Key4 = {
    number: '4'
  };
const Key5 = {
    number: '5'
  };
const Key6 = {
    number: '6'
  };
const Key7 = {
    number: '7'
  };
const Key8 = {
    number: '8'
  };
const Key9 = {
    number: '9'
  };
const Key0 = {
    other: '0'
  };
const Clear = {
    other: 'clear'
};

const NumberButton = props => {
    return (
        <div className={`number-button ${props.numberOnProps.number}`}>
            {props.numberOnProps.number}
        </div>
    );
}

const OtherNumberButton = props => {
    return (
        <div className='other-number-button'>
            {props.otherNumberProps.other}
        </div>
    );
}

export default NumberButton;

export {OtherNumberButton};
export {Key1};
export {Key2};
export {Key3};
export {Key4};
export {Key5};
export {Key6};
export {Key7};
export {Key8};
export {Key9};
export {Key0};
export {Clear};


