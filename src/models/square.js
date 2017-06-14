import { routerRedux  } from 'dva/router';
import { message } from 'antd'
import * as usersService from '../services/square';

export default {

  namespace: 'square',

  state: {
    list: [],
    user: [],
    detail: [],
    total: null,
    page: null,
  },

  reducers: {
    save(state, { payload: { data: list, total, page } }) {
      return { ...state, list, total, page };
    },
    user(state, { payload: { user } }) {
      return { ...state, user };
    },
    detail(state, { payload: { detail } }) {
      return { ...state, detail };
    },
  },

  effects: {

    *fetch({ payload: { page = 1, param = null} }, { call, put }) {
      const { data } = yield call(usersService.fetch, page, param, {
        authKey: sessionStorage.getItem('authKey')
      });
      yield put({
        type: 'save',
        payload: {
          data: data.data.list,
          total: parseInt(data.data.dataCount, 10),
          page: parseInt(page, 10),
        },
      });
    },
    *fetchOne({ payload: { square_id = null } }, { call, put }) {
      const { data } = yield call(usersService.fetchOne, square_id, {
        authKey: sessionStorage.getItem('authKey')
      });
      yield put({
        type: 'detail',
        payload: { detail: data.data },
      });
    },
    *fetchSelf(action, { call, put, select }) {
      const { avatar } = yield select(state => state.square.user);
      if (!avatar) {
        const {data} = yield call(usersService.fetchSelf, {
          authKey: sessionStorage.getItem('authKey')
        });
        yield put({
          type: 'user',
          payload: { user: data.data },
        });
      }
    },
    *create({ payload: values }, { call, put }) {
      const { data } = yield call(usersService.create, values, {
        authKey: sessionStorage.getItem('authKey')
      });
      message.success(data.data)
      yield put(routerRedux.push('/square'));
    },
    *comment({ payload: values }, { call, put }) {
      const { data } = yield call(usersService.comment, values, {
        authKey: sessionStorage.getItem('authKey')
      });
      message.success(data.data)
      yield put(routerRedux.push('/square'));
    },
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/square') {
          dispatch({
            type: 'fetch',
            payload: query
          })
        }

        if (pathname === '/square/aboutme') {
          dispatch({
            type: 'fetch',
            payload: {
              ...query,
              param: 2
            }
          })
        }

        if (pathname === '/square/detail') {
          dispatch({
            type: 'fetchOne',
            payload: query
          })
        }

        if ((pathname === '/square/addsquare') || (pathname === '/square/comment')) {
          dispatch({
            type: 'fetchSelf'
          })
        }

      });
    },
  },

};
