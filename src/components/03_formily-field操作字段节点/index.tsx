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
  // ---------- 获取表单字段的信息 --------------
  const handleGetFormInfo = () => {
    // 通过 form 获取表单字段节点
    const userNameField = form.query('username')

    // 获取表单值
    console.log(userNameField.get('value'))
    console.log(userNameField.value())
    // 获取必填状态
    console.log(userNameField.get('required'))
    // 获取禁用状态
    console.log(userNameField.get('disabled'))
  }

  // --------- 改表单字段的状态 ----------
  const handleSetFormInfo = () => {
    // 获取表单字段节点
    const userNameField = form.query('username')

    userNameField.take((field) => {
      field.value = '张三' // 更改值
      field.required = false // 更改是否必填
      field.disabled = true // 更改是否禁用
      field.visible = false // 更改是否隐藏
      field.componentProps = { placeholder: '请输入用户名' } // 更改组件内部属性
    })
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
