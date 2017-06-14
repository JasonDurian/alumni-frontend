import React from 'react';
import { Pagination } from 'antd';
import SingleSquare from './SingleSquare'
import styles from './SquareList.css'
import { SQUARE_PAGE } from '../../../constants/Config';

const UserList = ({ list, total, current, pageChangeHandler, linkHandler, commentHandler, commentLink }) => {

  return (
    <div className={styles.bg_color}>
      {
        list.length > 0 ? (
          <div>
            {
              list.map((val, key) => (
                <SingleSquare
                  key={key}
                  dataSource={val}
                  linkHandler={linkHandler}
                  commentHandler={commentHandler}
                  commentLink={commentLink}
                />
              ))
            }
            <Pagination
              total={total}
              current={current}
              pageSize={SQUARE_PAGE}
              onChange={pageChangeHandler}
              className={styles.pagination}
            />
          </div>
        ) : (
          <p className={styles.no_data}>暂无数据</p>
        )
      }
    </div>
  )
}

export default UserList;
