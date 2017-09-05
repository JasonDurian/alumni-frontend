import React from 'react';
import { Form, Button, Icon, Input, DatePicker, Select } from 'antd';
import UserAvatar from '../../Normal/UserAvatar/UserAvatar'
import styles from './AddSquare.css'

const FormItem = Form.Item;
const Option = Select.Option;

const AddHelp = ({ userInfo, isActivity, onOk, loading, form }) => {

  const { getFieldDecorator } = form;
  const dateFormat = 'YYYY-MM-DD HH:mm';

  const okHandler = () => {
    form.validateFields((err, values) => {
      if (!err) {
        const { params } = values
        params && (values.params.activity_time = params.activity_time.unix())
        onOk(values);
      }
    });
  };

  const disabledDate = (current) => {
    // Can not select days before today
    return current && current.valueOf() < Date.now()
  }

  return (
    <div className={styles.bg_body}>
      <UserAvatar userInfo={userInfo} />

      {
        isActivity != 1 ? (
          <div>
            <Form>
              <p className={styles.title_icon}><Icon type="file-text"/>&nbsp;&nbsp;标题</p>
              <FormItem>
                {
                  getFieldDecorator('title', {
                    rules: [{
                      required: true, message: '请填写标题'
                    }, {
                      max: 20, message: '字数超出了'
                    }],
                  })(<Input placeholder="必填，帮帮忙标题，20字内"/>)
                }
              </FormItem>
              <p className={styles.title_icon}><Icon type="exclamation-circle-o"/>&nbsp;&nbsp;帮帮忙说明</p>
              <FormItem>
                {
                  getFieldDecorator('content', {
                    rules: [{
                      required: true, message: '请填写说明'
                    }, {
                      max: 500, message: '字数超出了'
                    }],
                  })(<Input type="textarea" autosize={{minRows: 6, maxRows: 8}} placeholder="必填，详细说明需要帮忙的内容，500字内"/>)
                }
              </FormItem>
            </Form>

            <p className={styles.title_icon}>帮帮忙须知</p>
            <p className={styles.mention}>1.请保证真实性，如果发现虚假信息管理员有权删除信息，情节恶劣者会删除其用户资格！</p>
            <p className={styles.mention}>2.请注意此帮帮忙将在三个月后自行删除。</p>
          </div>
        ) : (
          <div>
            <Form>
              <p className={styles.title_icon}><Icon type="file-text"/>&nbsp;&nbsp;活动标题</p>
              <FormItem>
                {
                  getFieldDecorator('title', {
                    rules: [{
                      required: true, message: '请填写标题'
                    }, {
                      max: 20, message: '字数超出了'
                    }],
                  })(<Input placeholder="必填，活动标题，20字内"/>)
                }
              </FormItem>
              <p className={styles.title_icon}><Icon type="clock-circle-o" />&nbsp;&nbsp;活动时间</p>
              <FormItem>
                {
                  getFieldDecorator('params[activity_time]', {
                    rules: [{
                      type: 'object', required: true, message: '请选择活动时间'
                    }],
                  })(
                    <DatePicker
                      showTime ={{
                        format: "HH:mm"
                      }}
                      disabledDate={disabledDate}
                      format={dateFormat}
                    />
                  )
                }
              </FormItem>
              <p className={styles.title_icon}><Icon type="environment-o" />&nbsp;&nbsp;活动城市</p>
              <FormItem>
                {
                  getFieldDecorator('params[city]', {
                    rules: [{
                      required: true, message: '请填写活动城市'
                    }, {
                      max: 20, message: '字数超出了'
                    }],
                  })(<Input placeholder="必填，活动城市"/>)
                }
              </FormItem>
              <p className={styles.title_icon}><Icon type="environment" />&nbsp;&nbsp;活动地点</p>
              <FormItem>
                {
                  getFieldDecorator('params[place]', {
                    rules: [{
                      required: true, message: '请填写活动地点'
                    }, {
                      max: 50, message: '字数超出了'
                    }],
                  })(<Input placeholder="必填，活动地点"/>)
                }
              </FormItem>
              <p className={styles.title_icon}><Icon type="pay-circle-o" />&nbsp;&nbsp;活动费用</p>
              <FormItem>
                {
                  getFieldDecorator('params[charge]', {
                    rules: [{
                      pattern: /^[0-9]{0,6}$/, message: '整数，不超过6位'
                    }],
                  })(<Input placeholder="选填，活动费用信息"/>)
                }
              </FormItem>
              <p className={styles.title_icon}><Icon type="usergroup-add" />&nbsp;&nbsp;报名人群</p>
              <FormItem>
                {
                  getFieldDecorator('params[crowd]', {
                    initialValue: "1",
                    rules: [{
                      required: true, message: '请选择报名人群'
                    }],
                  })(
                    <Select>
                      <Option value="1" key="1">公开</Option>
                    </Select>
                  )
                }
              </FormItem>
              <p className={styles.title_icon}><Icon type="exclamation-circle-o"/>&nbsp;&nbsp;活动说明</p>
              <FormItem>
                {
                  getFieldDecorator('content', {
                    rules: [{
                      required: true, message: '请填写说明'
                    }, {
                      max: 500, message: '字数超出了'
                    }],
                  })(<Input type="textarea" autosize={{minRows: 6, maxRows: 8}} placeholder="必填，详细说明活动的内容，500字内"/>)
                }
              </FormItem>
            </Form>

            <p className={styles.title_icon}>活动须知</p>
            <p className={styles.mention}>1.请保证真实性，如果发现虚假信息管理员有权删除信息，情节恶劣者会删除其用户资格！</p>
            <p className={styles.mention}>2.请注意此活动将在截止时间一天后自行删除。</p>
            <p className={styles.mention}>3.如活动有变更请联系秘书处相关人员。</p>
          </div>
        )
      }

      <Button type="primary" htmlType="submit" className={styles.release_btn} loading={loading} onClick={okHandler}>发布</Button>
    </div>
  )
}

export default Form.create()(AddHelp);
