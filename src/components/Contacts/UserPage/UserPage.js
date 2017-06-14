import React from 'react';
import { Row, Col, Icon, Button } from 'antd';
import styles from './UserPage.css'
import qq_icon from '../../../assets/icon/qq.svg'

const UserPage = ({ dataSource, commentHandler }) => {

  const {avatar, name, city, department, grade, work, company, position, mobile, hide_mobile, email, wechat, qq} = dataSource

  return (
    <div className={styles.bg_color}>
      <Row className={styles.head_bg}>
        <Col span={8} className={styles.head_icon}>
          <img src={avatar}/>
        </Col>
        <Col span={16} className={styles.head_font}>
          <p><span className={styles.head_name}>{name}</span>&nbsp;({city})</p>
          <p>{company  || '未填写公司信息'}</p>
          <p>{position || '未填写公司职位'}</p>
          <p>{work}</p>
        </Col>
      </Row>
      <div className={styles.middle_menu}>
        <div className={styles.middle_div}>
          <p className={styles.middle_icon}><Icon type="team" />&nbsp;&nbsp;班级信息</p>
          <p>{`${department}、${grade}级`}</p>
        </div>
      </div>
      <div className={styles.member_center}>
        <div className={styles.member_item}>
          <p><Icon type="phone"/>&nbsp;&nbsp;手机</p>
          <div className={styles.member_content}>{hide_mobile == 2 ? '用户隐藏了手机号码': mobile}</div>
        </div>
        <div className={styles.member_item}>
          <p><Icon type="mail"/>&nbsp;&nbsp;邮箱</p>
          <div className={styles.member_content}>{email}</div>
        </div>
        <div className={styles.member_item}>
          <p><Icon type="message"/>&nbsp;&nbsp;微信</p>
          <div className={styles.member_content}>{wechat}</div>
        </div>
        <div className={styles.member_item}>
          <p className={styles.svg_icon}>
            <embed
              src={qq_icon}
              type="image/svg+xml"
            />
            <span className={styles.svg_name}>QQ</span>
          </p>
          <div className={styles.member_content}>{qq || ''}</div>
        </div>
        <div>
          <p><Icon type="tag-o"/>&nbsp;&nbsp;自己说说</p>
        </div>
        <div>
          <p><Icon type="tag-o"/>&nbsp;&nbsp;他人评价</p>
        </div>
      </div>
      <Button className={styles.comment_btn} onClick={commentHandler}>[查看说说及评价]</Button>
    </div>
  )
}

export default UserPage;
