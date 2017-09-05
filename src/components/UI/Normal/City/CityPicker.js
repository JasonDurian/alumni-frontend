import React from 'react'
import Alia from './Alia'
import AliaCity from './AliaCity'
import initCities from '../../../../assets/ui/initCities.json'
import style from './CityPicker.css'

const CityPicker  = ({ clickHandler }) => {

  let nodes = []
  for(let key in initCities) {
    nodes.push(
      <AliaCity
        key={key}
        type={key}
        onOk={clickHandler}
        cities={initCities[key]}
      />
    )
  }

  return (
    <div className={style.city_container}>
      <h3 className={style.title_label}>选择所在城市</h3>
      <Alia />
      {nodes}
    </div>
  )
}

export default CityPicker
