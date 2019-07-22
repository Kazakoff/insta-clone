/* eslint-disable no-unused-expressions */
import React from 'react';
import logoimg from '../../img/logo.png';
import * as style from '../../styles';
import RgLogContainer from '../Entrance/containers/RgLogContainer';

const AdminView = () => {
  <div>
    <div className={style.logo}>
      <img src={logoimg} alt="logo" />
    </div>
    <RgLogContainer />
  </div>;
};

export default AdminView;
