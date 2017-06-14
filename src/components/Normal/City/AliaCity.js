import React from 'react'
import style from './AliaCity.css'

const AliaCity = ({ type, onOk, cities }) => (
  <div className={style.city_box}>
    {
      type != 'Hot' ? (
        <h4>
          <p id={type+"city"}>
            <span>{type}</span>
            (以{type}为开头的城市名)
          </p>
        </h4>
      ) : (
        <h4>
          <p id="Hotcity">
            <span>热门城市</span>
            <span className={style.local_city}>目前所在城市：</span>
          </p>
        </h4>
      )
    }
    <ul className={style.city_lst}>
      {cities.map((cities, i) =>
        <li key={i} onClick={()=>onOk(cities.fullname)}>{cities.fullname}</li>
      )}
    </ul>
  </div>
)

export default AliaCity
