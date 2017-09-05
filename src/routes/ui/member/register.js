import React from 'react';
import { connect } from 'dva';
import RegisterComponent from '../../../components/UI/Member/Register';

const Register = ({ dispatch, loading }) => {

  const createHandler = (values) => {
    dispatch({
      type: 'member/create',
      payload: values,
    })
  }

  return (
    <div>
      <RegisterComponent
        loading={loading}
        createHandler={createHandler}
      />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    loading: state.loading.models.member,
  };
}

export default connect(mapStateToProps)(Register);
