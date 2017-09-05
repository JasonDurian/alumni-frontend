import React from 'react';
import { Button, Icon } from 'antd';
import moment from 'moment'
import UserAvatar from '../../Normal/UserAvatar/UserAvatar'
import styles from './Detail.css'


const Detail = ({ detail, clickHandler, commentLink, loading }) => {

  const { avatar, name, title, content, params, type, create_time, squareComment } = detail
  const userInfo = {
    avatar: avatar,
    username: name
  }
  const { activity_time, city, place, charge, crowd } = !params ? {} : JSON.parse(params)

  return (
    <div className={styles.bg_body}>
      <UserAvatar userInfo={userInfo} />
      <ul className={styles.detail_ul}>
        <li>
          <p className={styles.title_icon}><Icon type="file-text"/>&nbsp;&nbsp;标题</p>
          <p className={styles.title_text}>{title}</p>
        </li>
        <li>
          <p className={styles.title_icon}><Icon type="clock-circle-o" />&nbsp;&nbsp;发布时间</p>
          <p className={styles.title_text}>{create_time}</p>
        </li>
        {
          type == 2 && (
            <div>
              <li>
                <p className={styles.title_icon}><Icon type="clock-circle-o" />&nbsp;&nbsp;活动时间</p>
                <p className={styles.title_text}>{moment.unix(parseInt(activity_time)).format('YYYY-MM-DD HH:mm')}</p>
              </li>
              <li>
                <p className={styles.title_icon}><Icon type="environment-o" />&nbsp;&nbsp;活动地点</p>
                <p className={styles.title_text}>{city}-{place}</p>
              </li>
              <li>
                <p className={styles.title_icon}><Icon type="pay-circle-o" />&nbsp;&nbsp;活动费用</p>
                <p className={styles.title_text}>￥&nbsp;&nbsp;{charge}</p>
              </li>
              <li>
                <p className={styles.title_icon}><Icon type="usergroup-add" />&nbsp;&nbsp;报名人群</p>
                <p className={styles.title_text}>{crowd == 1 && '公开'}</p>
              </li>



            </div>
          )
        }
        <li>
          <p className={styles.title_icon}><Icon type="exclamation-circle-o"/>&nbsp;&nbsp;说明</p>
          <p className={styles.title_text}>{content}</p>
        </li>
        <li>
          <p className={styles.title_icon}><Icon type="message"/>&nbsp;&nbsp;留言</p>
          {
            (!!squareComment && (squareComment.length > 0)) && (
              <div className={styles.title_text}>
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
            )
          }
        </li>
      </ul>

      <Button type="primary" className={styles.release_btn} loading={loading} onClick={clickHandler}>我要留言</Button>
    </div>
  )
}

export default Detail;
