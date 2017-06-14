import React from 'react'
import { Router } from 'dva/router'
import Navbar from './routes/navbar'

const registerModel = (app, model) => {
  if (!(app._models.filter(m => m.namespace === model.namespace).length === 1)) {
    app.model(model)
  }
}

const Routers = function ({ history, app }) {
  const routes = [
    {
      path: '/',
      component: Navbar,
      getIndexRoute (nextState, cb) {
        require.ensure([], require => {
          registerModel(app, require('./models/member'))
          cb(null, { component: require('./routes/indexpage') })
        }, 'indexpage')
      },
      childRoutes: [
        {
          path: 'member',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/member/member'))
            }, 'member')
          },
        }, {
          path: 'register',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/member/register'))
            }, 'register')
          },
        }, {
          path: 'certify',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/member/certify'))
            }, 'certify')
          },
        }, {
          path: 'contact',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/contact'))
              cb(null, require('./routes/contact/contact'))
            }, 'contact')
          },
        }, {
          path: 'userlist',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/contact'))
              cb(null, require('./routes/contact/userlist'))
            }, 'userlist')
          },
        }, {
          path: 'userpage',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/contact'))
              cb(null, require('./routes/contact/userpage'))
            }, 'userpage')
          },
        }, {
          path: 'comment',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/comment'))
              cb(null, require('./routes/normal/comment'))
            }, 'comment')
          },
        }, {
          path: 'square',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/square'))
              cb(null, require('./routes/square/square'))
            }, 'square')
          },
        }, {
          path: 'square/aboutme',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/square'))
              cb(null, require('./routes/square/aboutme'))
            }, 'square-aboutme')
          },
        }, {
          path: 'square/addsquare',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/square'))
              cb(null, require('./routes/square/addsquare'))
            }, 'square-addsquare')
          },
        }, {
          path: 'square/comment',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/square'))
              cb(null, require('./routes/square/comment'))
            }, 'square-comment')
          },
        }, {
          path: 'square/detail',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/square'))
              cb(null, require('./routes/square/detail'))
            }, 'square-detail')
          },
        }, {
          path: 'citypicker',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/normal/citypicker'))
            }, 'citypicker')
          },
        }, {
          path: '*',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/normal/error/'))
            }, 'error')
          },
        },
      ],
    },
  ]

  return <Router history={history} routes={routes} />
}

export default Routers
