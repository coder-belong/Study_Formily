import { Form, Input, Select } from 'antd'

const Demo: React.FC = (props) => {
  // 创建 form 实例的对象
  const [form] = Form.useForm()

  // 监听 status 字段的变化,获取最新的 status
  const status = Form.useWatch('status', form)

  return (
    <Form form={form}>
      <Form.Item name="username" label="用户名">
        <Input disabled={status === 0} />
      </Form.Item>
      <Form.Item name="age" label="年龄">
        <Input disabled={status === 0} />
      </Form.Item>

      <Form.Item name="status" label="状态">
        <Select
          options={[
            { label: '禁用', value: 0 },
            { label: '启用', value: 1 },
          ]}
        />
      </Form.Item>
    </Form>
  )
}

export default Demo
