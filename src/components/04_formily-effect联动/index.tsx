import React from 'react'
import { Form, FormItem, Input, Select } from '@formily/antd-v5'
import { createForm, onFieldValueChange } from '@formily/core'
import { createSchemaField } from '@formily/react'

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    Select,
  },
})

const form = createForm({
  // effect 中的 form 和外层的 form 是一个东西，可以同享 API
  effects(form) {
    // 监听 goodStatus 字段的变化
    onFieldValueChange('goodStatus', (field) => {
      const goodNameField = form.query('goodName')
      goodNameField
    })
  },
})

const FormilyDependentDemo: React.FC = () => {
  return (
    <Form form={form}>
      <SchemaField.String name="goodName" title="名称" x-decorator="FormItem" x-component="Input" />
      <SchemaField>
        <SchemaField.String
          name="goodStatus"
          title="状态"
          x-decorator="FormItem"
          x-component="Select"
          enum={[
            { label: '禁用', value: 0 },
            { label: '启用', value: 1 },
          ]}
        />
      </SchemaField>
    </Form>
  )
}

export default FormilyDependentDemo
