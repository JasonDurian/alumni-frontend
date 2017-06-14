import dva from 'dva'
import { browserHistory, routerRedux } from 'dva/router'
import { message } from 'antd'
import createLoading from 'dva-loading'
import { persistStore , autoRehydrate } from 'redux-persist';
import { asyncSessionStorage  } from 'redux-persist/storages'
import './index.css'

// 1. Initialize
const app = dva({
  history: browserHistory,
  onError(e, dispatch) {
    if ((e.number === 101) || (e.number === 103)){
      dispatch(routerRedux.push('/'))
    }
    message.error(e.message, /* duration */3);
  },
  extraEnhancers : [ autoRehydrate() ],
});

// 2. Plugins
app.use(createLoading());

// 3. Model
app.model(require('./models/member'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');

//6. persist   安全性
// persistStore( app._store, {
//   whitelist: ['member'],
//   storage: asyncSessionStorage,
// });

/*
 * 暂时用此方法在任意位置删除任意state
purgeStoredState({storage: localStorage}, ['member']).then(() => {
  console.log('purge of memberReducer completed')
}).catch(() => {
  console.log('purge of memberReducer failed')
})
 */
