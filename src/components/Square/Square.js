import React from 'react';
import { Button, Tabs, Spin } from 'antd';
import SquareList from './SquareList/SquareList'
import styles from './Square.css'

const TabPane = Tabs.TabPane;

const Square = ({
  addSquare,
  list,
  total,
  page,
  defaultKey,
  linkHandler,
  commentHandler,
  pageChangeHandler,
  commentLink,
  differentHandler,
  loading
}) => {

  return (
    <div>
      <div className={styles.head_body}>
        <Button type="primary" size="large" className={styles.head_button} onClick={addSquare}>发布帮帮忙</Button>
        <Button type="primary" size="large" className={styles.head_button} onClick={() => addSquare('activity')}>发布活动</Button>
      </div>
      <Tabs defaultActiveKey={defaultKey} className={styles.tab_body} onChange={differentHandler}>
        <TabPane tab="全部" key="1">
          <Spin spinning={loading}>
            <SquareList
              list={list}
              total={total}
              current={page}
              linkHandler={linkHandler}
              commentHandler={commentHandler}
              commentLink={commentLink}
              pageChangeHandler={pageChangeHandler}
            />
          </Spin>
        </TabPane>
        <TabPane tab="与我有关" key="2">
          <Spin spinning={loading}>
            <SquareList
              list={list}
              total={total}
              current={page}
              linkHandler={linkHandler}
              commentHandler={commentHandler}
              commentLink={commentLink}
              pageChangeHandler={pageChangeHandler}
            />
          </Spin>
        </TabPane>
      </Tabs>

    </div>
  )
}

export default Square;
