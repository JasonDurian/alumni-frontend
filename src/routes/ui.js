import { registerModel } from '../utils/index'

const uiRouter = (app) => ([
  {
    path: 'member',
    getComponent (nextState, cb) {
      require.ensure([], require => {
        registerModel(app, require('../models/ui/member'))
        cb(null, require('./ui/member/member'))
      }, 'member')
    },
  }, {
    path: 'register',
    getComponent (nextState, cb) {
      require.ensure([], require => {
        registerModel(app, require('../models/ui/member'))
        cb(null, require('./ui/member/register'))
      }, 'register')
    },
  }, {
    path: 'certify',
    getComponent (nextState, cb) {
      require.ensure([], require => {
        registerModel(app, require('../models/ui/member'))
        cb(null, require('./ui/member/certify'))
      }, 'certify')
    },
  }, {
    path: 'contact',
    getComponent (nextState, cb) {
      require.ensure([], require => {
        registerModel(app, require('../models/ui/contact'))
        cb(null, require('./ui/contact/contact'))
      }, 'contact')
    },
  }, {
    path: 'userlist',
    getComponent (nextState, cb) {
      require.ensure([], require => {
        registerModel(app, require('../models/ui/contact'))
        cb(null, require('./ui/contact/userlist'))
      }, 'userlist')
    },
  }, {
    path: 'userpage',
    getComponent (nextState, cb) {
      require.ensure([], require => {
        registerModel(app, require('../models/ui/contact'))
        cb(null, require('./ui/contact/userpage'))
      }, 'userpage')
    },
  }, {
    path: 'comment',
    getComponent (nextState, cb) {
      require.ensure([], require => {
        registerModel(app, require('../models/ui/member'))
        registerModel(app, require('../models/ui/comment'))
        cb(null, require('./ui/normal/comment'))
      }, 'comment')
    },
  }, {
    path: 'square',
    getComponent (nextState, cb) {
      require.ensure([], require => {
        registerModel(app, require('../models/ui/square'))
        cb(null, require('./ui/square/square'))
      }, 'square')
    },
  }, {
    path: 'square/aboutme',
    getComponent (nextState, cb) {
      require.ensure([], require => {
        registerModel(app, require('../models/ui/square'))
        cb(null, require('./ui/square/aboutme'))
      }, 'square-aboutme')
    },
  }, {
    path: 'square/addsquare',
    getComponent (nextState, cb) {
      require.ensure([], require => {
        registerModel(app, require('../models/ui/square'))
        cb(null, require('./ui/square/addsquare'))
      }, 'square-addsquare')
    },
  }, {
    path: 'square/comment',
    getComponent (nextState, cb) {
      require.ensure([], require => {
        registerModel(app, require('../models/ui/square'))
        cb(null, require('./ui/square/comment'))
      }, 'square-comment')
    },
  }, {
    path: 'square/detail',
    getComponent (nextState, cb) {
      require.ensure([], require => {
        registerModel(app, require('../models/ui/square'))
        cb(null, require('./ui/square/detail'))
      }, 'square-detail')
    },
  }, {
    path: 'citypicker',
    getComponent (nextState, cb) {
      require.ensure([], require => {
        cb(null, require('./ui/normal/citypicker'))
      }, 'citypicker')
    },
  },
])

export default uiRouter
