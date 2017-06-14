import React from 'react'
import { Icon, Button, Popconfirm } from 'antd';
import UserModal from './UserModal';
import UserAvatar from  '../../Normal/UserAvatar/UserAvatar'
import styles from './Comment.css'

const Comment  = ({
  linkHandler,
  createHandler,
  editHandler,
  deleteHandler,
  comments,
  userInfo,
  member_id,
  loading
}) => (
  <div className={styles.body_bg}>
    <UserAvatar userInfo={userInfo} />
    <ul>
      <li><Icon type="file-text" />&nbsp;&nbsp;评价</li>
      {
        comments.map((val, k) => {
          let commentContent = ''
          let createTime = (val.create_time).replace(/\s[\x00-\xff]*/g,'')
          if(val.type === 2) {
            commentContent =
              <div>
                {val.username}：
                <span className={styles.comment_content}>
                    {val.content}（{createTime}&nbsp;&nbsp;自己说说）
                </span>
              </div>
          } else {
            commentContent =
              <a onClick={() => linkHandler(val.commenter_id)}>
                {val.username}：
                <span className={styles.comment_content}>
                  {val.content}（{createTime}）
                </span>
              </a>
          }
          if(val.commenter_id === member_id) {
            commentContent =
              <div>
                {commentContent}
                <div className={styles.comment_edit}>
                  <UserModal record={val.content} onOk={editHandler} loading={loading}>
                    <a>编辑&nbsp;</a>
                  </UserModal>
                  <Popconfirm placement="leftBottom" title="确认删除？" onConfirm={deleteHandler}>
                    <a href="">&nbsp;删除</a>
                  </Popconfirm>
                </div>
              </div>
          }
          return <li key={k} className={styles.comment_contain}>{commentContent}</li>
        })
      }
    </ul>
    <UserModal record={''} onOk={createHandler} loading={loading}>
      <Button type="primary" className={styles.comment_btn}>我要评价</Button>
    </UserModal>
    <p className={styles.comment_tip}>tips:自己评价自己就为说说</p>
  </div>
)


export default Comment
