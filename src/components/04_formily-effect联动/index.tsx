import React from 'react'
import { Form, FormItem, Input, Select } from '@formily/antd-v5'
import { Field, createForm, onFieldValueChange } from '@formily/core'
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
    // 监听 status 字段的变化
    onFieldValueChange('status', (statusField) => {
      // -------- 一对一 联动 ----------
      form.setFieldState('username', (usernameField) => {
        // goodName字段禁用状态取决于 goodStatus 字段值
        usernameField.disabled = statusField.getState().value === 0
      })
    })

    // 监听 goodStatus 字段的变化
    onFieldValueChange('status', (statusField) => {
      // -------- 一对多 联动 ----------
      form.setFieldState('*(username, age)', (commonField) => {
        commonField.disabled = statusField.getState().value === 0
      })
    })
  },
})

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
        />
      </SchemaField>
    </Form>
  )
}

export default FormilyDependentDemo
