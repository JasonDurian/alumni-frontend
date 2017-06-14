import React from 'react';
import { Router, Route, IndexRoute  } from 'dva/router';
import IndexPage from './routes/indexpage';
import Member from './routes/member/member'
import Contacts from './routes/contact/contact'
import Certify from './routes/member/certify'
import Register from './routes/member/register'
import CityPicker from './routes/normal/citypicker'
import UserList from './routes/contact/userlist'
import Navbar from './routes/navbar'

const RouterConfig = ({ history, app }) => (
  <Router history={history}>
    <Route path="/" component={Navbar}>
      <IndexRoute component={IndexPage} />
      <Route path="member" component={Member} />
      <Route path="register" component={Register} />
      <Route path="certify" component={Certify} />
      <Route path="citypicker" component={CityPicker} />

      <Route path="contact" component={Contacts} />
      <Route path="userlist" component={UserList} />
    </Route>
  </Router>
);

export default RouterConfig;
