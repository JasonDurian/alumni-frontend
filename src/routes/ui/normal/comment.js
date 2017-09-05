import React from 'react';
import { connect } from 'dva';
import { routerRedux  } from 'dva/router';
import CommentComponent from '../../../components/UI/Normal/Comment/Comment';

const Comment = ({ dispatch, location, comments, userInfo, member_id, loading }) => {

  const linkHandler = (id) => {
    dispatch(routerRedux.push({
      pathname: '/userpage',
      query: {
        id: id
      },
    }))
  }

  const createHandler = (values) => {
    dispatch({
      type: 'comment/create',
      payload: {
        ...values,
        member_id: parseInt(location.query.member_id, 10),
      }
    });
  }

  const editHandler = (values) => {
    dispatch({
      type: 'comment/patch',
      payload: {
        member_id : parseInt(location.query.member_id, 10),
        values
      },
    });
  }

  const deleteHandler = () => {
    const member_id = parseInt(location.query.member_id, 10)
    dispatch({
      type: 'comment/remove',
      payload: member_id,
    });
  }

  return (
    <div>
      <CommentComponent
        comments={comments}
        userInfo={userInfo}
        member_id={member_id}
        linkHandler={linkHandler}
        createHandler={createHandler}
        editHandler={editHandler}
        deleteHandler={deleteHandler}
        loading={loading}
      />
    </div>
  )
}

function mapStateToProps(state) {
  const { comments, userInfo } = state.comment
  const { list } = state.member
  return {
    comments,
    userInfo,
    member_id: list.member_id,
    loading: state.loading.models.comment,
  }
}

export default connect(mapStateToProps)(Comment);
