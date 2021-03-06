import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
    <React.Fragment>   
        <h2>Get started with react</h2>
        <p className="content-body">React makes it painless to create interactive UIs. Design simple views for each state in your application.
        </p>
        <span className="link">reactjs.org</span>
    </React.Fragment>
    );
}



export default CardContent;