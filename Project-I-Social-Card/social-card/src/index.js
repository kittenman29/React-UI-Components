import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

import HeaderContainer from './components/HeaderComponents/HeaderContainer';




function App() {
    return (
        <HeaderContainer />
    );
}


ReactDOM.render(<App />, document.getElementById('root'));
