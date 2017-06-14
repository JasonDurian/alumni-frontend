import React from 'react';
import { connect } from 'dva';
import { routerRedux  } from 'dva/router';
import SquareComponent from '../../components/Square/Square';

const AboutMe = ({ dispatch, location, total, page, list, loading }) => {

  const linkHandler = (id) => {
    dispatch(routerRedux.push({
      pathname: '/square/detail',
      query: {
        square_id: id,
      },
    }))
  }

  const commentHandler = (id) => {
    dispatch(routerRedux.push({
      pathname: '/square/comment',
      query: {
        square_id: id,
      },
    }))
  }

  const pageChangeHandler = (page) => {
    dispatch(routerRedux.push({
      pathname: '/square/aboutme',
      query: { page },
    }));
  }

  const addSquare = (param) => {
    const query = param === 'activity' ? { param : 1 } : {}
    dispatch(routerRedux.push({
      pathname: '/square/addsquare',
      query: query
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

  const differentHandler = () => {
    dispatch(routerRedux.push('/square'));
  }

  return (
    <div>
      <SquareComponent
        addSquare={addSquare}
        list={list}
        total={total}
        page={page}
        defaultKey="2"
        linkHandler={linkHandler}
        commentHandler={commentHandler}
        commentLink={commentLink}
        pageChangeHandler={pageChangeHandler}
        differentHandler={differentHandler}
        loading={loading}
      />
    </div>
  )
}

const mapStateToProps = (state) => {
  const { list, total, page } = state.square
  return {
    list,
    total,
    page,
    loading: state.loading.models.square,
  }
}

export default connect(mapStateToProps)(AboutMe);
