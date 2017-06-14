import React from 'react';
import { connect } from 'dva';
import { routerRedux  } from 'dva/router';
import ContactsComponent from '../../components/Contacts/Contacts';

const Contacts = ({ dispatch, location, city }) => {

  const linkHandler = ( type_id, value ) => {
    dispatch(routerRedux.push({
      pathname: '/userlist',
      query: {
        type_id: type_id,
        param: value
      },
    }))
  }

  return (
    <div>
      <ContactsComponent
        linkHandler={linkHandler}
        cityInfo={city}
      />
    </div>
  )
}

const mapStateToProps = (state) => {
  const { city } = state.contact
  return {
    city
  }
}

export default connect(mapStateToProps)(Contacts);
