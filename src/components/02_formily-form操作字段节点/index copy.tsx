import React from 'react'
import { Form, FormItem, Input, Select } from '@formily/antd-v5'
import { createForm } from '@formily/core'
import { createSchemaField } from '@formily/react'
import { Button } from 'antd'

const SchemaField = createSchemaField({
  components: { FormItem, Input },
})

const form = createForm()

const FormilyDemo: React.FC = () => {
  const handleGetFormInfo = () => {
    // const { value, required, visible, disabled } = form.getFieldState('username')
    // console.log(value, required, visible, disabled)
    // console.log(form.getValuesIn('username')) // 获取表单值
  }

  return (
    <>
      <Form form={form}>
        <SchemaField>
          <SchemaField.String name="username" title="用户名" x-decorator="FormItem" x-component="Input" required />
        </SchemaField>
      </Form>

      <Button onClick={() => handleGetFormInfo()}>查询表单字段信息</Button>
    </>
  )
}
export default FormilyDemo
