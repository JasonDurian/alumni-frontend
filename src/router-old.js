import React from 'react';
import { Router, Route, IndexRoute  } from 'dva/router';
import IndexPage from './routes/ui/indexpage';
import Member from './routes/ui/member/member'
import Contacts from './routes/ui/contact/contact'
import Certify from './routes/ui/member/certify'
import Register from './routes/ui/member/register'
import CityPicker from './routes/ui/normal/citypicker'
import UserList from './routes/ui/contact/userlist'
import Navbar from './routes/ui/navbar'

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
