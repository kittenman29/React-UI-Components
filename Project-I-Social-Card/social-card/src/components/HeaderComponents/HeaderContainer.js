import React from 'react';
import './Header.css';

import HeaderTitle from './components/HeaderComponents/HeaderTitle';
import HeaderContent from './components/HeaderComponents/HeaderContent';
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