import React from 'react';
import { Row, Col, Button, Spin } from 'antd';
import MemberCenter from './MemberCenter';
import Relations from './Relations'
import styles from './Member.css'

const Member = ({ dataSource, city, loading, editHandler, cityHandler, clickHandler, linkHandler, commentHandler }) => {

  const {avatar, id, name, username, department, grade, work} = dataSource
  const certifiedLabel = id ? "已认证": "未认证"
  return (
    <div className={styles.bg_color}>
      <Row className={styles.head_bg}>
        <Col span={8} className={styles.head_icon}>
          <img src={avatar}/>
        </Col>
        <Col span={3} className={styles.head_name}>
          <p>{ name || username }</p>
          <p className={styles.head_label}>{ certifiedLabel }</p>
        </Col>
      </Row>
      <Spin spinning={loading}>
        {
          id ? (
            <div>
              <Relations
                linkHandler={linkHandler}
                department={department}
                grade={grade}
                work={work}
              />
              <div className={styles.member_center}>
                <MemberCenter
                  record={dataSource ? dataSource : {}}
                  usercity={city}
                  loading={loading}
                  onOk={editHandler}
                  cityChange={cityHandler}
                  commentHandler={commentHandler}
                />
              </div>
            </div>
            ) : (
              <Button
                size="large"
                className={styles.certify_btn}
                onClick={clickHandler}
              > 点击认证 </Button>
            )
        }
      </Spin>
    </div>
  )
}

export default Member;
