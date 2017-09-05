import React from 'react';
import { Form, Input, Button } from 'antd';

const FormItem = Form.Item;

const Register = ({ loading, createHandler, form, }) => {

  let state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        createHandler(values)
      }
    });
  }

  const handleConfirmBlur = (e) => {
    const value = e.target.value;
    state = { confirmDirty: state.confirmDirty || !!value };
  }

  const checkPassword = (rule, value, callback) => {
    if (value && value !== form.getFieldValue('password')) {
      callback('两次输入的密码不一致');
    } else {
      callback();
    }
  }

  const checkConfirm = (rule, value, callback) => {
    if (value && state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  const { getFieldDecorator } = form;
  const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 15 },
  };

  return (
    <div>
      <Form>
        <FormItem
          {...formItemLayout}
          label="用户名"
        >
          {
            getFieldDecorator('username', {
              rules: [
                { required: true, message: '请输入您的用户名' },
              ],
            })(<Input />)
          }
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="密码"
          hasFeedback
        >
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: '请输入您的密码',
            }, {
              validator: checkConfirm,
            }],
          })(
            <Input type="password" />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="确认密码"
          hasFeedback
        >
        {getFieldDecorator('confirm', {
          rules: [{
            required: true, message: '请再次输入密码',
          }, {
            validator: checkPassword,
          }],
        })(
          <Input type="password" onBlur={handleConfirmBlur} />
        )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="头像"
        >
          {
            getFieldDecorator('avatar', {
              rules: [
                { required: true, message: '请编辑您的头像' },
              ],
            })(<Input />)
          }
        </FormItem>
        <FormItem
          wrapperCol={{ span: 12, offset: 6 }}
        >
          <Button type="primary" htmlType="submit" loading={loading} onClick={handleSubmit}>现在注册</Button>
        </FormItem>
      </Form>
    </div>
  );
}

const RegisterForm =  Form.create()(Register);

export default RegisterForm;
