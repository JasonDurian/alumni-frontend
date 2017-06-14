import { routerRedux  } from 'dva/router';
import { message } from 'antd'
import * as usersService from '../services/member';

export default {

  namespace: 'member',

  state: {
    list: [],
    // authKey: null,
    // sessionId: null,
  },

  reducers: {
    save(state, { payload: { data: list } }) {
      return { ...state, list };
    },
  },

  effects: {

    *login({ payload: values }, { call, put }) {
      const { data } = yield call(usersService.login, values);
      sessionStorage.setItem('authKey', data.data.authKey)
      // sessionStorage.setItem('sessionId', data.data.sessionId)
      yield put({
        type: 'save',
        payload: {
          data: data.data.userInfo,
          // authKey: data.data.authKey,
          // sessionId: data.data.sessionId,
        },
      });
      yield put( routerRedux.push({ pathname: '/member' }))
    },
    *create({ payload: values }, { call, put }) {
      yield call(usersService.create, values);
      // yield put({ type: 'fetchOne', payload: { id: data.data } });
      yield put(routerRedux.push('/'));
    },

     // 认证服务   用sessionId和authKey获取cache数据
    *fetchOne(action, { call, put }) {
      const { data } = yield call(usersService.fetchOne, {
        authKey: sessionStorage.getItem('authKey')
      });
      yield put({
        type: 'save',
        payload: {
          data: data.data,
        },
      });
    },
    *reload(action, { put, select }) {
      const { member_id, id } = yield select(state => state.member.list);
      (member_id || id) || (yield put({ type: 'fetchOne' }));           //从其他页面切换过来时，如果有state则不用再重新获取
    },
    *certify({ payload: values }, { call, put, select }) {
      const id = yield select(state => state.member.list.member_id);
      const { data } = yield call(usersService.certify, {
        ...values,
        member_id: id
      }, {
        authKey: sessionStorage.getItem('authKey')
      });
      message.success(data.data.message)
      yield put({
        type: 'save',
        payload: {
          data: data.data.userInfo,
        },
      });
      yield put(routerRedux.push('/member'));
      // yield put({ type: 'fetchOne' });
    },
    *patch({ payload: { id, values } }, { call, put }) {
      const { data } = yield call(usersService.patch, id, values, {
        authKey: sessionStorage.getItem('authKey')
      });
      message.success(data.data.message)
      yield put({
        type: 'save',
        payload: {
          data: data.data.userInfo,
        },
      });
    },
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {

        // if (pathname === '/certify') {
        //   query.city || dispatch(routerRedux.push({
        //     pathname: '/citypicker',
        //     query: {
        //       params: 'iscertify',
        //     },
        //   }));
        // }

        // 刷新页面时验证token
        if (pathname === '/member') {
          dispatch({ type: 'reload' })
        }

      });
    },
  },

};
