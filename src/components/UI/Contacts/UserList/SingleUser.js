import React from 'react';
import { Row, Col, Icon } from 'antd';
import styles from './SingleUser.css'

const SingleUser = ({ dataSource, linkHandler }) => {

  const {avatar, member_id, name, department, grade, company, position} = dataSource
  return (
    <div className={styles.bg_color} onClick={() => {linkHandler(member_id)}}>
      <Row className={styles.head_bg}>
        <Col span={8} className={styles.head_icon}>
          <img src={avatar}/>
        </Col>
        <Col span={13} className={styles.list_margin}>
          <p className={styles.list_name}>{name}</p>
          <p>{company  || '未填写公司信息'}</p>
          <p>{position || '未填写公司职位'}</p>
          <p>{`${department}、${grade}级`}</p>
        </Col>
        <Col span={3} >
          <Icon type="right" className={styles.list_right}/>
        </Col>
      </Row>
    </div>
  )
}

export default SingleUser;
