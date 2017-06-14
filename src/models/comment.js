import { message } from 'antd'
import * as usersService from '../services/comment';

export default {

  namespace: 'comment',

  state: {
    comments: [],
    userInfo: []
  },

  reducers: {
    save(state, { payload: { comments, userInfo } }) {
      return { ...state, comments, userInfo };
    },
  },

  effects: {
    *fetch({ payload: { member_id } }, { call, put }) {
      const { data } = yield call(usersService.fetchComment, member_id, {
        authKey: sessionStorage.getItem('authKey')
      });
      yield put({
        type: 'save',
        payload: {
          comments: data.data.comments,
          userInfo: data.data.userInfo
        },
      });
    },
    *create({ payload: values }, { call, put }) {
      // const id = yield select(state => state.member.list.member_id);   //刷新后就没有state.member了
      const { data } = yield call(usersService.create, values, {
        authKey: sessionStorage.getItem('authKey')
      });
      message.success(data.data)
      yield put({
        type: 'fetch',
        payload: {
          member_id: values.member_id,
        },
      });
    },
    *patch({ payload: { member_id, values } }, { call, put }) {
      const { data } = yield call(usersService.patch, member_id, values, {
        authKey: sessionStorage.getItem('authKey')
      });
      message.success(data.data)
      yield put({
        type: 'fetch',
        payload: {
          member_id: member_id,
        },
      });
    },
    *remove({ payload: member_id }, { call, put }) {
      const { data } = yield call(usersService.remove, member_id, {
        authKey: sessionStorage.getItem('authKey')
      });
      message.success(data.data)
      yield put({
        type: 'fetch',
        payload: {
          member_id: member_id,
        }
      });
    },
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/comment') {
          dispatch({
            type: 'fetch',
            payload: query
          })
        }
      });
    },
  },

};
