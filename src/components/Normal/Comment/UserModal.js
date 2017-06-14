import React, { Component } from 'react';
import { Modal, Form, Input } from 'antd';

const FormItem = Form.Item;

class UserEditModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  showModelHandler = (e) => {
    if (e) e.stopPropagation();
    this.setState({
      visible: true,
    });
  };

  hideModelHandler = () => {
    this.setState({
      visible: false,
    });
  };

  okHandler = () => {
    const { onOk } = this.props;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        onOk(values);
        this.hideModelHandler();
      }
    });
  };

  render() {
    const { children, record, loading } = this.props;
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      wrapperCol: { span: 24 },
    };

    return (
      <span>
        <span onClick={this.showModelHandler}>
          { children }
        </span>
        <Modal
          title="编辑评价"
          visible={this.state.visible}
          onOk={this.okHandler}
          onCancel={this.hideModelHandler}
          confirmLoading={loading}
        >
          <Form onSubmit={this.okHandler}>
            <FormItem
              {...formItemLayout}
            >
              {
                getFieldDecorator('content', {
                  initialValue: record,
                  rules: [{
                    max:60, message: '字数超出了'
                  }],
                })(<Input type="textarea" placeholder="评价内容" autosize={{ maxRows: 3 }} />)
              }
            </FormItem>
          </Form>
        </Modal>
      </span>
    );
  }
}

export default Form.create()(UserEditModal);
