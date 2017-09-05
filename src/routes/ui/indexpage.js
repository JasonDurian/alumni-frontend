import React from 'react';
import { connect } from 'dva';
// import { routerRedux  } from 'dva/router';
import styles from './indexpage.css';
import LoginForm from '../../components/UI/Member/Login';

const IndexPage = ({ dispatch, location, loading }) => {

  const submitHandler = (values) => {
    dispatch({
      type: 'member/login',
      payload: values,
    })

    // dispatch( routerRedux.push({ pathname: '/member' }) );
  }

  return (
    <div className={styles.normal}>
      <LoginForm
        loading={loading}
        submitHandler={submitHandler}
      />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    loading: state.loading.models.member,
  };
}

export default connect(mapStateToProps)(IndexPage);
