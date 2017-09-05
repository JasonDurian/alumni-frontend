import React from 'react';
import { connect } from 'dva';
import CommentComponent from '../../../components/UI/Square/Comment/Comment';

const Square = ({ dispatch, location, user, loading }) => {

  const createHandler = (values) => {
    dispatch({
      type: 'square/comment',
      payload: {
        ...values,
        square_id: parseInt(location.query.square_id, 10),
      }
    });
  }

  return (
    <div>
      <CommentComponent
        userInfo={user}
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

export default connect(mapStateToProps)(Square);
