import React from 'react';
import { Row, Col, Icon, Button } from 'antd';
import styles from './SingleSquare.css'

const SingleUser = ({ dataSource, linkHandler, commentHandler, commentLink }) => {

  const { avatar, id, title, type, create_time, squareComment } = dataSource
  return (
    <div className={styles.bg_color}>
      <Row className={styles.head_bg} onClick={() => {linkHandler(id)}}>
        <Col span={8} className={styles.head_icon}>
          <img src={avatar}/>
        </Col>
        <Col span={13} className={styles.list_margin}>
          <p className={styles.list_name}>{title}</p>
          {
            type == 2 ? (
                <Button icon="plus-circle" className={styles.type_button}>活动</Button>
              ) : (
                <Button icon="question-circle" className={styles.type_button}>帮帮忙</Button>
              )
          }
        </Col>
        <Col span={3} >
          <Icon type="right" className={styles.list_right}/>
        </Col>
      </Row>
      <div className={styles.footer_body}>
        <span>发布时间：{create_time.replace(/\s[\x00-\xff]*/g,'')}</span>
        <Button type="primary" icon="edit" className={styles.footer_button} onClick={() => commentHandler(id)}>留言</Button>
      </div>
      {
        squareComment.length > 0 && (
          <div className={styles.comment_body}>
            <div className={styles.comment_container}>
              {
                squareComment.map((val, key) => (
                  <p key={key}>
                    <a onClick={() => commentLink(val.commenter_id)}>
                      {val.commenter_name}：
                    </a>
                    <span className={styles.comment_content}>
                        {val.content}
                      </span>
                  </p>
                ))
              }
            </div>
          </div>
        )
      }
    </div>
  )
}

export default SingleUser;
