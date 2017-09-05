import React from 'react';
import { connect } from 'dva';
import SquareComponent from '../../../components/UI/Square/Add/AddSquare';

const AddSquare = ({ dispatch, location, loading, user }) => {

  const createHandler = (values) => {
    dispatch({
      type: 'square/create',
      payload: values
    });
  }

  return (
    <div>
      <SquareComponent
        userInfo={user}
        isActivity={location.query.param}
        onOk={createHandler}
        loading={loading}
      />
    </div>
  )
}

const mapStateToProps = (state) => {
  const { user } = state.square
  return {
    user,
    loading: state.loading.models.square,
  }
}

export default connect(mapStateToProps)(AddSquare);
