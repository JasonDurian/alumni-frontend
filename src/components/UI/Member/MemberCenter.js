import React, { Component } from 'react';
import { Col, Form, Input, Select, Switch, Button } from 'antd';
import { WORKS, DEPARTMENTS, GRADES } from '../../../constants/Normal'

const FormItem = Form.Item;
const Option = Select.Option;
// const AutoCompleteOption = AutoComplete.Option;

const MemberCenter = ({ record, onOk, loading, usercity, cityChange, commentHandler, isCertify, form }) => {

  const okHandler = () => {
    form.validateFields((err, values) => {
      if (!err) {
        const { hide_mobile } = values
        values.hide_mobile = hide_mobile ? 2 : 1
        onOk(values);
      }
    });
  };

  const { getFieldDecorator } = form;
  const { name, sex, mobile, hide_mobile, work, email, company, position, wechat, qq, major, grade } = record;
  const formItemLayout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 19 },
  };

    return (
      <div>
        <Form>
          <FormItem
            {...formItemLayout}
            label="城市"
          >
            {
              getFieldDecorator('city', {
                initialValue: usercity,
                rules: [{
                  required: true, message: '请选择所在城市',
                }, {
                  max: 15, message: '超出最大长度',
                }],
              })(<Input onClick={cityChange} />)
            }
          </FormItem>
          {
            isCertify && (
              <span>
                <FormItem
                  {...formItemLayout}
                  label="院系"
                  hasFeedback
                >
                  {getFieldDecorator('department', {
                    initialValue: '电子信息工程学院',
                    rules: [
                      { required: true, message: '请选择您的院系' }
                    ],
                  })(
                    <Select placeholder="请选择您的院系">
                      {
                        DEPARTMENTS.map( (val, k) => (
                          <Option value={val} key={k}>{val}</Option>
                        ))
                      }
                    </Select>
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="专业"
                  hasFeedback
                >
                {getFieldDecorator('major', {
                  initialValue: major,
                  rules: [
                    { required: true, message: '请输入您的专业' }
                ],
                })(
                  <Input />
                )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="年级"
                  hasFeedback
                >
                  {getFieldDecorator('grade', {
                    initialValue: grade ? `${grade}级` : '',
                    rules: [
                      { required: true, message: '请选择您的年级' }
                    ],
                  })(
                    <Select placeholder="请选择您的年级">
                      {
                        GRADES.map( (val, k) => (
                          <Option value={val} key={k}>{val}</Option>
                        ))
                      }
                    </Select>
                  )}
                </FormItem>
              </span>
            )
          }
          <FormItem
            {...formItemLayout}
            label="姓名"
            hasFeedback
          >
            {
              getFieldDecorator('name', {
                initialValue: name,
                rules: [
                  { required: true, message: '请输入您的姓名' },
                ],
              })(<Input />)
            }
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="性别"
            hasFeedback
          >
            {
              getFieldDecorator('sex', {
              initialValue: (sex == 1 ? '1' : '2'),
              rules: [
                { required: true, message: '请选择您的性别' },
              ],
              })(
                <Select placeholder="请选择您的性别">
                  <Option value="1">男</Option>
                  <Option value="2">女</Option>
                </Select>
              )
            }
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="手机"
          >
            <Col span={13}>
              <FormItem
                hasFeedback
              >
                {
                  getFieldDecorator('mobile', {
                    initialValue: mobile,
                    rules: [{
                      required: true, pattern: /^[0-9]{11,15}$/, message: '请输入正确的手机号'
                    }],
                  })(<Input />)
                }
              </FormItem>
            </Col>
            <Col span={11} push={1}>
              <FormItem>
                {
                  getFieldDecorator('hide_mobile', {
                    valuePropName: 'checked',
                    initialValue: hide_mobile==2,
                  })(
                    <Switch checkedChildren={'隐藏'} unCheckedChildren={'未隐藏'}/>
                  )
                }
              </FormItem>
            </Col>
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="行业"
            hasFeedback
          >
            {
              getFieldDecorator('work', {
              initialValue: work,
              rules: [
                { required: true, message: '请选择所从事的行业' },
              ],
              })(
                <Select placeholder="请选择所从事的行业">
                  {
                    WORKS.map( (val, k) => (
                      <Option value={val} key={k}>{val}</Option>
                    ))
                  }
                </Select>
              )
            }
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="邮箱"
            hasFeedback
          >
            {
              getFieldDecorator('email', {
                initialValue: email,
                rules: [{
                  type: 'email', message: '必须为正确的e-mail格式',
                }, {
                  required: true, message: '请输入您的邮箱'
                }],
              })(<Input />)
            }
          </FormItem>
          {
            isCertify || (
              <span>
                <FormItem
                  {...formItemLayout}
                  label="微信"
                  hasFeedback
                >
                  {
                    getFieldDecorator('wechat', {
                      initialValue: wechat,
                      rules: [{
                        pattern: /^[\u4E00-\u9FA5A-Za-z0-9_]{5,20}$/, message: '请输入正确的微信号'
                      }],
                    })(<Input />)
                  }
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="QQ"
                  hasFeedback
                >
                  {
                    getFieldDecorator('qq', {
                      initialValue: qq || '',
                      rules: [{
                        pattern: /^[0-9]{2,20}$/, message: '请输入正确的QQ号'
                      }],
                    })(<Input />)
                  }
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="公司"
                  hasFeedback
                >
                  {
                    getFieldDecorator('company', {
                      initialValue: company,
                      rules: [{
                        max:20, message: '字数超出了'
                      }],
                    })(<Input />)
                  }
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="职位"
                  hasFeedback
                >
                  {
                    getFieldDecorator('position', {
                      initialValue: position,
                      rules: [{
                        max:20, message: '字数超出了'
                      }],
                    })(<Input />)
                  }
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="说说&评价"
                >
                  {
                    <Button type="danger" htmlType="button" onClick={commentHandler}>[查看说说及评价]</Button>
                  }
                </FormItem>
              </span>
            )
          }
          <FormItem
            wrapperCol={{ span: 12, offset: 6 }}
          >
            <Button type="primary" htmlType="submit" icon="user-add" loading={loading} onClick={okHandler}>保存个人信息</Button>
          </FormItem>
        </Form>
      </div>
    );
}

export default Form.create()(MemberCenter);
