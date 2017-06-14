import React from 'react'
import styles from './UserAvatar.css'

const UserAvatar  = ({ userInfo }) => {
  const { username, avatar } = userInfo

  return (
    <div className={styles.head_bg}>
      <div>
        <img className={styles.head_img} src={avatar} />
      </div>
      <p className={styles.head_name}>{username}</p>
    </div>
  )
}

export default UserAvatar
