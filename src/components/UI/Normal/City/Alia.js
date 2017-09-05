import React from 'react'
import { ALIAS } from '../../../../constants/Normal'
import style from './Alia.css'

const Alia = () => (
  <div className={style.city_box}>
    <h3>按字母排序</h3>
    <ul className={style.letters_lst}>
      {ALIAS.map((alias, i) =>
        <li key={i}>
          <a href={"#"+alias+"city"}>{alias}</a>
        </li>
      )}
    </ul>
  </div>
)

export default Alia
