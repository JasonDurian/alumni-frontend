import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import MemberComponent from '../../../components/UI/Member/Member';

const Member = ({ dispatch, location, list, loading }) => {

  const editHandler = (values) => {
    dispatch({
      type: 'member/patch',
      payload: { id: list.id, values },
    })
  }

  const cityHandler = () => (
    dispatch(routerRedux.push('/citypicker'))
  )

  const clickHandler = () => {
    dispatch(routerRedux.push({
      pathname: 'citypicker',
      query: {
        params: 'iscertify',
      },
    }))
  }

  const linkHandler = (type_id, value) => {
    dispatch(routerRedux.push({
      pathname: '/userlist',
      query: {
        type_id: type_id,
        param: value,
      },
    }))
  }

  const commentHandler = () => {
    dispatch(routerRedux.push({
      pathname: '/comment',
      query: {
        member_id: list.member_id
      },
    }));
  }

  const realCity = location.query.city || list.city

  return (
    <div>
      <MemberComponent
        dataSource={list}
        city={realCity}
        loading={loading}
        editHandler={editHandler}
        cityHandler={cityHandler}
        clickHandler={clickHandler}
        linkHandler={linkHandler}
        commentHandler={commentHandler}
      />
    </div>
  )
}

function mapStateToProps(state) {
  const { list } = state.member
  return {
    list,
    // city: ownProps.location.query.city || list.city,
    loading: state.loading.models.member,
  }
}

export default connect(mapStateToProps)(Member);
