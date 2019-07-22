import React from 'react';
import logoimg from '../../img/logo.png';
import * as style from '../../styles';
import RgLogContainer from './containers/RgLogContainer';

const EntranceView = () => (
  <div>
    <div className={style.logo}>
      <img src={logoimg} alt="logo" />
    </div>
    <RgLogContainer />
  </div>
);

export default EntranceView;
