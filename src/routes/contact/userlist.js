import React from 'react';
import { connect } from 'dva';
import { routerRedux  } from 'dva/router';
import UserComponent from '../../components/Contacts/UserList/UserList';

const UserList = ({ dispatch, location, list, total, page, loading }) => {

  const pageChangeHandler = (page) => {
    dispatch(routerRedux.push({
      pathname: '/userlist',
      query: {
        page,
        type_id: location.query.type_id,
        param: location.query.param
      },
    }));
  }

  const linkHandler = (id) => {
    dispatch(routerRedux.push({
      pathname: '/userpage',
      query: {
        id: id
      },
    }));
  }

  return (
    <div>
      <UserComponent
        list={list}
        total={total}
        current={page}
        pageChangeHandler={pageChangeHandler}
        linkHandler={linkHandler}
        loading={loading}
      />
    </div>
  )
}

const mapStateToProps = (state) => {
  const { list, total, page } = state.contact
  return {
    list,
    total,
    page,
    loading: state.loading.models.contact,
  }
}

export default connect(mapStateToProps)(UserList);
