import React from 'react'
import { Form, FormItem, Input, Select } from '@formily/antd-v5'
import { createForm } from '@formily/core'
import { createSchemaField } from '@formily/react'

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    Select,
  },
})

const form = createForm()

const FormilyDependentDemo: React.FC = () => {
  return (
    <Form form={form}>
      <SchemaField>
        <SchemaField.String name="username" title="用户名" x-decorator="FormItem" x-component="Input" />
        <SchemaField.String name="age" title="年龄" x-decorator="FormItem" x-component="Input" />

        <SchemaField.String
          name="status"
          title="状态"
          x-decorator="FormItem"
          x-component="Select"
          enum={[
            { label: '禁用', value: 0 },
            { label: '启用', value: 1 },
          ]}
          x-component-props={{
            onChange(value) {
              form.setFieldState('*(username, age)', (state) => {
                state.disabled = value === 0
              })
            },
          }}
        />
      </SchemaField>
    </Form>
  )
}

export default FormilyDependentDemo
