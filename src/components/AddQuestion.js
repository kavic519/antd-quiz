import { Form, Input, Button, Radio, Space } from 'antd';
import React from 'react';

const formItemLayout = {
  labelCol: { xs: { span: 24 }, sm: { span: 6 } },
  wrapperCol: { xs: { span: 24 }, sm: { span: 18 } },
};
const tailFormItemLayout = {
  wrapperCol: { xs: { span: 24, offset: 0 }, sm: { span: 18, offset: 6 } },
};

const App = () => {
  const [form] = Form.useForm();
  
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  
  const onCancel = () => {
    form.resetFields();
    console.log('Form cancelled');
  };
  
  return (
    <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '8px' }}>
      <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>新增题目</h2>
      <Form
        {...formItemLayout}
        form={form}
        name="question"
        onFinish={onFinish}
        scrollToFirstError
      >
        {/* 题目内容 */}
        <Form.Item
          name="questionContent"
          label="题目内容"
          rules={[{
            required: true,
            message: '请输入题目内容!',
          }]}
        >
          <Input.TextArea rows={3} placeholder="请输入题目内容..." />
        </Form.Item>

        {/* 选项A */}
        <Form.Item
          name="optionA"
          label="选项A"
          rules={[{
            required: true,
            message: '请输入选项A内容!',
          }]}
        >
          <Input placeholder="请输入选项A内容" />
        </Form.Item>

        {/* 选项B */}
        <Form.Item
          name="optionB"
          label="选项B"
          rules={[{
            required: true,
            message: '请输入选项B内容!',
          }]}
        >
          <Input placeholder="请输入选项B内容" />
        </Form.Item>

        {/* 选项C */}
        <Form.Item
          name="optionC"
          label="选项C"
          rules={[{
            required: true,
            message: '请输入选项C内容!',
          }]}
        >
          <Input placeholder="请输入选项C内容" />
        </Form.Item>

        {/* 选项D */}
        <Form.Item
          name="optionD"
          label="选项D"
          rules={[{
            required: true,
            message: '请输入选项D内容!',
          }]}
        >
          <Input placeholder="请输入选项D内容" />
        </Form.Item>

        {/* 正确答案 */}
        <Form.Item
          name="correctAnswer"
          label="正确答案"
          rules={[{
            required: true,
            message: '请选择正确答案!',
          }]}
        >
          <Radio.Group>
            <Space direction="horizontal">
              <Radio value="A">A</Radio>
              <Radio value="B">B</Radio>
              <Radio value="C">C</Radio>
              <Radio value="D">D</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        {/* 按钮区域 */}
        <Form.Item {...tailFormItemLayout}>
          <Space size="middle">
            <Button onClick={onCancel}>
              取消
            </Button>
            <Button type="primary" htmlType="submit">
              确定
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default App;