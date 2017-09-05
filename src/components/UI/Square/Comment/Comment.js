import React from 'react';
import { Form, Button, Icon, Input } from 'antd';
import UserAvatar from '../../Normal/UserAvatar/UserAvatar'
import styles from './Comment.css'

const FormItem = Form.Item;

const Comment = ({ userInfo, onOk, loading, form }) => {

  const { getFieldDecorator } = form;

  const okHandler = () => {
    form.validateFields((err, values) => {
      if (!err) {
        onOk(values);
      }
    });
  };

  return (
    <div className={styles.bg_body}>
      <UserAvatar userInfo={userInfo} />
        <div>
          <Form>
            <p className={styles.title_icon}><Icon type="exclamation-circle-o"/>&nbsp;&nbsp;留言</p>
            <FormItem>
              {
                getFieldDecorator('content', {
                  rules: [{
                    required: true, message: '请填写留言'
                  }, {
                    max: 255, message: '字数超出了'
                  }],
                })(<Input type="textarea" autosize={{minRows: 6, maxRows: 8}} placeholder="必填，请输入留言，255字内"/>)
              }
            </FormItem>
          </Form>

          <p className={styles.title_icon}>留言须知</p>
          <p className={styles.mention}>1.请保证真实性，如果发现虚假信息,及恶意差评的用户管理员有权删除信息，情节恶劣者管理员会删除其用户资格！</p>
          <p className={styles.mention}>2.请注意帮帮忙将在三个月后自行删除，活动将在截止时间一天后自行删除。</p>
        </div>
      <Button type="primary" htmlType="submit" className={styles.release_btn} loading={loading} onClick={okHandler}>提交</Button>
    </div>
  )
}

export default Form.create()(Comment);
