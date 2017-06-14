import React from 'react';
import styles from './Member.css'
import department_img from '../../assets/icon/department.png'
import grade_img from '../../assets/icon/grade.png'
import work_img from '../../assets/icon/work.png'

const Relations = ({ linkHandler, department, grade, work }) => (
    <div className={styles.middle_menu}>
      <div className={styles.middle_item}>
        <div>
          <img className={styles.img_style} src={department_img} />
          <span>院系</span>
        </div>
        <div className={styles.link_font_style} onClick={() => linkHandler(1, department)}>{department}</div>
      </div>
      <div className={styles.middle_item}>
        <div>
          <img className={styles.img_style} src={grade_img} />
          <span>年级</span>
        </div>
        <div className={styles.link_font_style} onClick={() => linkHandler(2, `${department}_${grade}`)}>{grade}级</div>
      </div>
      <div className={styles.middle_item}>
        <div>
          <img className={styles.img_style} src={work_img} />
          <span>行业</span>
        </div>
        <div className={styles.link_font_style} onClick={() => linkHandler(3, work)}>{work}</div>
      </div>
    </div>
)

export default Relations;
