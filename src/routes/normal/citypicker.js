import React from 'react';
import { connect } from 'dva';
import { routerRedux  } from 'dva/router';
import CityComponent from '../../components/Normal/City/CityPicker';

const CityPicker = ({ dispatch, location }) => {

  const clickHandler = ( val ) => {
    // dispatch({
    //   type: 'member/citychange',
    //   payload: val,
    // })

    /* 判断是否为认证时的请求 */
    dispatch(routerRedux.push({
      // pathname: list.length === 0 ? 'register' : '/member',
      pathname: location.query.params == 'iscertify' ? '/certify' : '/member',
      query: {
        city: val,
      },
    }))
  }

  return (
    <CityComponent
      clickHandler={clickHandler}
    />
  );
}

export default connect()(CityPicker);
