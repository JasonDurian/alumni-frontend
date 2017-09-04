import React from 'react'
import { Router } from 'dva/router'
import uiRouter from './routes/ui'
import Navbar from './routes/ui/navbar'
import { registerModel } from './utils/index'

const Routers = function ({ history, app }) {
  const ui = uiRouter(app)
  const routes = [
    {
      path: '/',
      component: Navbar,
      getIndexRoute (nextState, cb) {
        require.ensure([], require => {
          registerModel(app, require('./models/ui/member'))
          cb(null, { component: require('./routes/ui/indexpage') })
        }, 'indexpage')
      },
      childRoutes: [
        ...ui,
        {
          path: '*',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/ui/normal/error/'))
            }, 'error')
          },
        },
      ],
    },
  ]

  return <Router history={history} routes={routes} />
}

export default Routers
