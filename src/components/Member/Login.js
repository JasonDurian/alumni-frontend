import React from 'react';
import { Form, Icon, Input, Button } from 'antd';

const FormItem = Form.Item;

const Login = ({ loading, form, submitHandler }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        submitHandler(values)
      }
    });
  }

  const { getFieldDecorator } = form;
  const formItemLayout = {
    wrapperCol : { span: 12, offset: 6 }
  };

  return (
    <Form onSubmit={handleSubmit} className="login-form">
      <FormItem
        {...formItemLayout}
      >
        {getFieldDecorator('username', {
          rules: [{ required: true, message: 'Please input your username!' }],
        })(
          <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
        )}
      </FormItem>
      <FormItem
        {...formItemLayout}
      >
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Please input your Password!' }],
        })(
          <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
        )}
      </FormItem>
      <FormItem
        {...formItemLayout}
      >
        <Button type="primary" htmlType="submit" className="login-form-button" loading={loading}>
          Log in
        </Button>
        Or <a href="/register">register now!</a>
      </FormItem>
    </Form>
  );
}

const LoginForm =  Form.create()(Login);

export default LoginForm
