import React from 'react';
import { connect } from 'dva';
import { routerRedux  } from 'dva/router';
import CertifyComponent from '../../components/Member/Certify';

const Certify = ({ dispatch, location, loading }) => {

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
        city={realCity}
        loading={loading}
        createHandler={createHandler}
        cityHandler={cityHandler}
      />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    // city: ownProps.location.query.city || '',
    loading: state.loading.models.member,
  };
}

export default connect(mapStateToProps)(Certify);
