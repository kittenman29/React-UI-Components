import React from 'react';
import './Footer.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faComment, faRetweet, faHeart, faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(faComment, faRetweet, faHeart, faEnvelope);


const Footer = () => {
    return (
        <React.Fragment>
            <div className="footer-emojis">
                <i className="far fa-comment"></i>
                <i className="fas fa-retweet">6</i>
                <i className="far fa-heart">4</i>
                <i className="far fa-envelope"></i>
            </div>
        </React.Fragment>
    );
  }

export default Footer;