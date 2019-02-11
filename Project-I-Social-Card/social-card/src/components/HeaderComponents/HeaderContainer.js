import React from 'react';
import './Header.css';

import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail';

const HeaderContainer = () => {
    return (
        <div class="container">
            <ImageThumbnail />
            <HeaderTitle />
            <HeaderContent /> 
        </div>
    );
  }

export default HeaderContainer;