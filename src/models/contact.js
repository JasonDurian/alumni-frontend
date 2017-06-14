import * as usersService from '../services/contact';

export default {

  namespace: 'contact',

  state: {
    list: [],
    user: [],
    city: [],
    total: null,
    page: null,
  },

  reducers: {
    save(state, { payload: { data: list, total, page } }) {
      return { ...state, list, total, page };
    },
    userpage(state, { payload: { user } }) {
      return { ...state, user };
    },
    cityInfo(state, { payload: { city } }) {
      return { ...state, city };
    }
  },

  effects: {

    *fetch({ payload: { type_id, param, page = 1 } }, { call, put }) {
      const { data } = yield call(usersService.fetch, type_id, param, page);
      yield put({
        type: 'save',
        payload: {
          data: data.data.list,
          total: parseInt(data.data.dataCount, 10),
          page: parseInt(page, 10),
        },
      });
    },
    *fetchOne({ payload: { id = null } }, { call, put }) {
      const { data } = yield call(usersService.fetchOne, id);
      yield put({
        type: 'userpage',
        payload: { user: data.data },
      });
    },

    *getCity(action, { call, put }) {
      const { data } = yield call(usersService.getCity);
      yield put({
        type: 'cityInfo',
        payload: { city: data.data },
      });
    },
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/userlist') {
          dispatch({
            type: 'fetch',
            payload: query
          })
        }

        if (pathname === '/userpage') {
          dispatch({
            type: 'fetchOne',
            payload: query
          })
        }

        if (pathname === '/contact') {
          dispatch({
            type: 'getCity'
          })
        }
      });
    },
  },

};
