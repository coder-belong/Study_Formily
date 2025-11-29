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
          x-reactions={{
            // target 表示联动的目标字段
            // target: 'username',  // 一对一
            target: '*(username, age)', // 一对多

            // fulfill 表示当当前字段满足条件时，要执行的动作
            fulfill: {
              // state 用来修改目标字段的状态
              state: {
                // $self.value 代表当前字段的值
                disabled: '{{$self.value === 0}}',
              },
            },
          }}
        />
      </SchemaField>
    </Form>
  )
}

export default FormilyDependentDemo
