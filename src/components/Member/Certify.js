import React from 'react';
import MemberCenter from './MemberCenter';
import styles from './Certify.css'

const Certify = ({ dispatch, loading, city, createHandler, cityHandler }) => (

  <div className={styles.container}>
    <MemberCenter
      record={{}}
      usercity={city}
      loading={loading}
      onOk={createHandler}
      cityChange={cityHandler}
      isCertify={true}
    />
  </div>
)

export default Certify;
