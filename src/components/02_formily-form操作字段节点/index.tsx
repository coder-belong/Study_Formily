import React from 'react'
import { Form, FormItem, Input, Select } from '@formily/antd-v5'
import { createForm } from '@formily/core'
import { createSchemaField } from '@formily/react'
import { Button, Flex } from 'antd'

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    Select,
  },
})

const form = createForm()

const FormilyDemo: React.FC = () => {
  // ---------- 获取表单字段的信息(getFieldState) --------------
  const handleGetFormInfo = () => {
    const { value, required, visible, disabled } = form.getFieldState('username')
    console.log(value, required, visible, disabled)
    console.log(form.getValuesIn('username')) // 获取表单值
  }

  // --------- 改表单字段的状态(setFieldState) ----------
  const handleSetFormInfo = () => {
    form.setFieldState('username', (field) => {
      field.value = '张三' // 更改值
      field.required = false // 更改是否必填
      field.disabled = true // 更改是否禁用
      // field.visible = false // 更改是否隐藏
      // field.componentProps = { placeholder: '请输入用户名' } // 更改组件属性
    })

    form.setValuesIn('username', '李四') // 更改表单值
  }

  return (
    <>
      <Form form={form}>
        <SchemaField>
          <SchemaField.String name="username" title="用户名" x-decorator="FormItem" x-component="Input" required />
        </SchemaField>
      </Form>

      <Flex gap={8}>
        <Button onClick={() => handleGetFormInfo()}>查询表单字段信息</Button>
        <Button onClick={() => handleSetFormInfo()} type="primary">
          修改表单字段信息
        </Button>
      </Flex>
    </>
  )
}
export default FormilyDemo
