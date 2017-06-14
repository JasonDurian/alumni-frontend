import React from 'react';
import { Pagination, Spin } from 'antd';
import SingleUser from './SingleUser'
import styles from './UserList.css'
import { PAGE_SIZE } from '../../../constants/Config';

const UserList = ({ list, total, current, pageChangeHandler, linkHandler, loading }) => {

  return (
  <Spin spinning={loading} >
    <div className={styles.bg_color}>
      {
        list.length > 0 ? (
          <div>
            {
              list.map((val, key) => (
                <SingleUser
                  key={key}
                  dataSource={val}
                  linkHandler={linkHandler}
                />
              ))
            }
            <Pagination
            total={total}
            current={current}
            pageSize={PAGE_SIZE}
            onChange={pageChangeHandler}
            className={styles.pagination}
            />
          </div>
        ) : (
          <p className={styles.no_data}>暂无数据</p>
        )
      }
    </div>
  </Spin>
  )
}

export default UserList;
