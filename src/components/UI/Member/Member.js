import React from 'react';
import { Row, Col, Button, Spin, Alert } from 'antd';
import MemberCenter from './MemberCenter';
import Relations from './Relations'
import styles from './Member.css'

const Member = ({ dataSource, city, loading, editHandler, cityHandler, clickHandler, linkHandler, commentHandler }) => {

  const { avatar, check_status, id, name, username, department, grade, work } = dataSource
  let certifiedLabel = ''
  let buttonLabel = ''
  switch (check_status) {
    case 0: {
      certifiedLabel = '未认证'
      buttonLabel    = '点击认证'
    } break;
    case 1: certifiedLabel = '已认证'; break;
    case 2: certifiedLabel = '认证中'; break;
    case 3: {
      certifiedLabel = '认证失败'
      buttonLabel    = '重新认证'
    } break;
    default:break;
  }
  return (
    <div className={styles.bg_color}>
      <Row className={styles.head_bg}>
        <Col span={8} className={styles.head_icon}>
          <img src={avatar} />
        </Col>
        <Col span={3} className={styles.head_name}>
          <p>{ name || username }</p>
          <p className={styles.head_label}>{ certifiedLabel }</p>
        </Col>
      </Row>
      <Spin spinning={loading}>
        {
          check_status == '1' ? (
            <div>
              <Relations
                linkHandler={linkHandler}
                department={department}
                grade={grade}
                work={work}
              />
              <div className={styles.member_center}>
                <MemberCenter
                  record={dataSource || {}}
                  usercity={city}
                  loading={loading}
                  onOk={editHandler}
                  cityChange={cityHandler}
                  commentHandler={commentHandler}
                />
              </div>
            </div>
            ) : (
              buttonLabel == '' ? (
                <Alert
                  message={certifiedLabel}
                  description=" "
                  type="info"
                  showIcon
                  className={styles.certify_label}
                />
              ) : (
                <Button
                  size="large"
                  className={styles.certify_btn}
                  onClick={clickHandler}
                >{ buttonLabel }</Button>
              )
            )
        }
      </Spin>
    </div>
  )
}

export default Member;
