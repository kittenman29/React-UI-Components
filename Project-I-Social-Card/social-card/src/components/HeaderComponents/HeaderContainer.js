import React from 'react';
import './Header.css';

import HeaderTitle from './components/HeaderComponents/HeaderTitle';
import HeaderContent from './components/HeaderComponents/HeaderContent';
import ImageThumbnail from './ImageThumbnail';

const Container = () => {
    return (
        <div class="container">
            <ImageThumbnail />
            <HeaderTitle />
            <HeaderContent /> 
        </div>
    );
  }

export default Container;