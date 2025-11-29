import { Input, Select, FormItem, FormButtonGroup, Submit, Form, Reset, Radio } from '@formily/antd-v5'
import { createForm } from '@formily/core'
import { createSchemaField } from '@formily/react'

const Title = (props) => <h3>{props.text}</h3>

// createSchemaField：生成 SchemaField 组件，需要传入实际渲染的组件
const SchemaField = createSchemaField({
  components: {
    Input,
    Select,
    FormItem,
    Title,
    Radio,
  },
})

// 创建表单实例
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
      <SchemaField>
        {/* 输入框 */}
        <SchemaField.String
          name="goodName"
          title="商品名称"
          x-decorator="FormItem"
          x-component="Input"
          x-decorator-props={{
            labelAlign: 'right',
            tooltip: '提示提示',
            tooltipLayout: 'text',
            colon: false, // 不展示冒号，默认为true
          }}
          x-component-props={{
            placeholder: '请输入',
          }}
        />

        {/* 输入框 */}
        <SchemaField.String name="goodPrice" title="商品价格" x-decorator="FormItem" x-component="Input" />

        {/* 下拉框 */}
        <SchemaField.String
          name="goodStatus"
          title="商品状态"
          x-decorator="FormItem"
          x-component="Select"
          enum={[
            { label: '选项1', value: 1 },
            { label: '选项2', value: 2 },
          ]}
        />

        {/* 单选框 */}
        <SchemaField.String
          name="size"
          title="尺寸"
          x-decorator="FormItem"
          x-component="Radio.Group"
          enum={[
            { value: 'small', label: 'Small' },
            { value: 'default', label: 'Default' },
            { value: 'large', label: 'Large' },
          ]}
        />

        {/* 自定义组件 */}
        <SchemaField.Void x-component="Title" x-component-props={{ text: '我是自定义组件要展示的内容' }} />
      </SchemaField>

      <FormButtonGroup>
        <Reset>重置</Reset>
        <Submit>提交</Submit>
      </FormButtonGroup>
    </Form>
  )
}

export default Demo
