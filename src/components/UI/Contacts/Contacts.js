import React from 'react';
import { Tabs, Input, Select } from 'antd';
import { WORKS, GRADES, DEPARTMENTS } from '../../../constants/Normal'
import styles from './Contacts.css'

const TabPane = Tabs.TabPane;
const Option = Select.Option;

const Contacts = ({ linkHandler, cityInfo }) => {

  return (
    <div>
      <div className={styles.search_bar} >
        <Input.Search
          placeholder="请输入关键词"
          onSearch={value => {
            linkHandler(7, value)
          }}
        />
      </div>
      <Tabs defaultActiveKey="1" className={styles.tab_body}>
        <TabPane tab="行业" key="1">
          <ul className={styles.industry}>
            <li>
              <a onClick={() => linkHandler(3, '')}>全部行业</a>
            </li>
            {
              WORKS.map((val, k) => (
                <li key={k}>
                  <a onClick={() => linkHandler(3, val)}>{ val }</a>
                </li>
              ))
            }
          </ul>
        </TabPane>
        <TabPane tab="院系" key="2">
          {
            DEPARTMENTS.map((val, k) => (
              <Select
                defaultValue={val}
                key={k}
                className={styles.department_select}
                onSelect={value => {
                  linkHandler(2, `${val}_${value}`)
                }}
              >
                {
                  GRADES.map((vo, kk) => (
                    <Option value={vo} key={kk}>{vo}</Option>
                  ))
                }
              </Select>
            ))
          }
        </TabPane>
        <TabPane tab="城市" key="3">
          <ul className={styles.industry}>
            {
              cityInfo.map((val, k) => (
                <li key={k}>
                  <a onClick={() => linkHandler(4, val.city)}>{ val.city }({val.num})</a>
                </li>
              ))
            }
          </ul>
        </TabPane>
      </Tabs>
    </div>
  )
}

export default Contacts;
