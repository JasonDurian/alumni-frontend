import React from 'react';
import { connect } from 'dva';
import MainLayout from '../../components/UI/MainLayout/MainLayout';

const Navbar = ({ children, location }) => {

  return (
    <MainLayout location={location}
      children={children}
    />
  )
}

export default connect()(Navbar);
