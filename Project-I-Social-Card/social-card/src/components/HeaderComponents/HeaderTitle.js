import React from 'react';
import './Header.css';

const Title = () => {
    return (
        <img alt="logo" src="https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png"></img>
        <h1>Lambda School</h1>
        <p class="header-tag">@LambdadSchool * 
            <input type="date"></input>
        </p>
        <p class="header-body">Let's learn React by building simple interfaces with components.  Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!
        </p>
        
    );
}

export default Title;