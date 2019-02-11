import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';



function App() {
    return (
        <React.Fragment>
            <HeaderContainer />
            <CardContainer />
        </React.Fragment>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
