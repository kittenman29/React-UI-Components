import React from 'react';
import './Header.css';

const HeaderTitle = () => {
    return (
        <React.Fragment>
            <h1>Lambda School</h1>
            <p class="header-tag">@LambdadSchool <span>11 Feb</span></p>
        </React.Fragment>
    );
}

export default HeaderTitle;