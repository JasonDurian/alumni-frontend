import React from 'react';
import { connect } from 'dva';
import { routerRedux  } from 'dva/router';
import CertifyComponent from '../../../components/UI/Member/Certify';

const Certify = ({ dispatch, location, list, loading }) => {

  const createHandler = (values) => {
    dispatch({
      type: 'member/certify',
      payload: values,
    })

    // dispatch( routerRedux.push('/member') );
  }

  const cityHandler = () => (
    dispatch(routerRedux.push({
      pathname: '/citypicker',
      query: {
        params: 'iscertify',
      },
    }))
  )

  const realCity = location.query.city || ''

  return (
    <div>
      <CertifyComponent
        dataSource={list}
        city={realCity}
        loading={loading}
        createHandler={createHandler}
        cityHandler={cityHandler}
      />
    </div>
  )
}

function mapStateToProps(state) {
  const { list } = state.member
  return {
    // city: ownProps.location.query.city || '',
    list,
    loading: state.loading.models.member,
  };
}

export default connect(mapStateToProps)(Certify);
