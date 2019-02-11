import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

import HeaderContainer from './components/HeaderComponents/HeaderContainer.js';




function App() {
    return (
        <div>
            <HeaderContainer />
        </div>
    );
}


ReactDOM.render(<App />, document.getElementById('root'));
