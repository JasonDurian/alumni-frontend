import React from 'react';
import { connect } from 'dva';
import { routerRedux  } from 'dva/router';
import DetailComponent from '../../../components/UI/Square/Detail/Detail';

const Detail = ({ dispatch, location, loading, detail }) => {

  const clickHandler = () => {
    dispatch(routerRedux.push({
      pathname: '/square/comment',
      query: {
        square_id: location.query.square_id,
      },
    }))
  }

  const commentLink = (id) => {
    dispatch(routerRedux.push({
      pathname: '/userpage',
      query: {
        id: id
      },
    }))
  }

  return (
    <div>
      <DetailComponent
        detail={detail}
        clickHandler={clickHandler}
        commentLink={commentLink}
        loading={loading}
      />
    </div>
  )
}

const mapStateToProps = (state) => {
  const { detail } = state.square
  return {
    detail,
    loading: state.loading.models.square,
  }
}

export default connect(mapStateToProps)(Detail);
