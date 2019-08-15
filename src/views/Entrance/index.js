import React from 'react';
import logoimg from '../../img/logo.png';
import RgLogContainer from './containers/RegLogContainer';
import './styles.scss';

const EntranceView = () => (
  <div>
    <div className="entraceView__logo">
      <img src={logoimg} alt="logo" />
    </div>
    <RgLogContainer />
  </div>
);

export default EntranceView;
