import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';
import styles from './Footer.css'

const Footer = ({ location }) => (
  <div>
    <Menu
      selectedKeys={[location.pathname]}
      mode="horizontal"
      className={styles.fixed_menu}
    >
      <Menu.Item key="/square" className={styles.menu_item}>
        <Link to="/square"><Icon type="notification" />广场</Link>
      </Menu.Item>
      <Menu.Item key="/contact" className={styles.menu_item}>
        <Link to="/contact"><Icon type="contacts" />通讯录</Link>
      </Menu.Item>
      <Menu.Item key="/member" className={styles.menu_item}>
        <Link to="/member"><Icon type="user" />我</Link>
      </Menu.Item>
    </Menu>
  </div>
)

export default Footer;
