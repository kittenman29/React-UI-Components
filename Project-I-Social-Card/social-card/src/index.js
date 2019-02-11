import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import './components/HeaderComponents/Header.css';
import App from './App';

import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import HeaderContent from './components/HeaderComponents/HeaderContent';



function App() {
    return (
        <div>
            <HeaderContainer />
            <HeaderContent />
        </div>
    );
}


ReactDOM.render(<App />, document.getElementById('root'));
