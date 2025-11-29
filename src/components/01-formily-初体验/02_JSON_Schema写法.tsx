import { Input, Select, FormItem, FormButtonGroup, Submit, Form, Reset, FormLayout } from '@formily/antd-v5'
import { createForm } from '@formily/core'
import { createSchemaField } from '@formily/react'

// 注册 SchemaField 组件
const SchemaField = createSchemaField({
  components: {
    Input,
    FormItem,
    Select,
  },
})

// 定义 Schema（JSON 配置表单）
const schema = {
  type: 'object',
  properties: {
    goodName: {
      type: 'string',
      title: '商品名称',
      'x-decorator': 'FormItem', // 装饰器
      'x-component': 'Input', // 组件
      'x-decorator-props': {
        // 装饰器属性
        labelAlign: 'right',
        tooltip: '提示提示',
        tooltipLayout: 'text',
        colon: false,
      },
      'x-component-props': {
        // 组件属性
        placeholder: '请输入',
      },
    },
    goodPrice: {
      type: 'string',
      title: '商品价格',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    goodStatus: {
      type: 'string',
      title: '商品状态',
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        options: [
          { label: '选项1', value: 1 },
          { label: '选项2', value: 2 },
        ],
      },
    },
  },
}

// 创建 Form 实例
const form = createForm()

const Demo: React.FC = () => {
  return (
    <Form
      form={form}
      // 处理表单的提交
      onAutoSubmit={(formValues) => {
        console.log('values:', formValues)
      }}
    >
      <FormLayout labelCol={6} wrapperCol={10}>
        <SchemaField schema={schema} />
      </FormLayout>

      <FormButtonGroup>
        <Reset>重置</Reset>
        <Submit>提交</Submit>
      </FormButtonGroup>
    </Form>
  )
}

export default Demo
