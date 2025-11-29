import { Input, Select, FormItem, FormButtonGroup, Submit, Form, Reset, FormLayout } from '@formily/antd-v5'
import { createForm } from '@formily/core'
import { Field } from '@formily/react'

// 创建 Form 实例
const form = createForm()

const Demo: React.FC = () => {
  return (
    <Form
      form={form}
      labelCol={6}
      wrapperCol={10}
      // 处理表单的提交
      onAutoSubmit={(formValues) => {
        console.log('values:', formValues)
      }}
    >
      <Field
        name="username"
        title="用户名"
        decorator={[FormItem]}
        component={[
          Input,
          {
            placeholder: '请输入用户名',
          },
        ]}
      />

      <Field
        name="status"
        title="状态"
        required
        decorator={[FormItem]}
        component={[
          Select,
          {
            placeholder: '请选择哈',
            options: [
              { label: '禁用', value: 0 },
              { label: '启用', value: 1 },
            ],
          },
        ]}
      />

      <FormButtonGroup>
        <Reset>重置</Reset>
        <Submit>提交</Submit>
      </FormButtonGroup>
    </Form>
  )
}

export default Demo
