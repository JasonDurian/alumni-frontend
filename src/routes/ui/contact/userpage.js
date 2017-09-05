import React from 'react';
import { connect } from 'dva';
import { routerRedux  } from 'dva/router';
import UserComponent from '../../../components/UI/Contacts/UserPage/UserPage';

const UserPage = ({ dispatch, location, user, loading }) => {

  const commentHandler = () => {
    dispatch(routerRedux.push({
      pathname: '/comment',
      query: {
        member_id: location.query.id,
      },
    }));
  }

  return (
    <div>
      <UserComponent
        dataSource={user}
        commentHandler={commentHandler}
      />
    </div>
  )
}

const mapStateToProps = (state) => {
  const { user } = state.contact
  return {
    user,
    loading: state.loading.models.contact,
  }
}

export default connect(mapStateToProps)(UserPage);
