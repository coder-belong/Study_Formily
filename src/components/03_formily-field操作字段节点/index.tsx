import React from 'react'
import { Form, FormItem, Input, Select } from '@formily/antd-v5'
import { Field, createForm } from '@formily/core'
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
  // ---------- 获取表单字段的信息(getState) --------------
  const handleGetFormInfo = () => {
    // 获取字段节点实例
    const userNameField = form.query('username').take() as Field
    // 获取字段状态
    const { value, required, visible, disabled } = userNameField.getState()
    console.log(value, required, visible, disabled)

    console.log(userNameField.value) // 也可以直接通过字段实例获取值
  }

  // --------- 改表单字段的状态(setState) ----------
  const handleSetFormInfo = () => {
    // 获取表单字段节点
    const userNameField = form.query('username').take() as Field

    // 修改字段状态
    // userNameField.setState({
    //   value: '张三',
    //   required: false,
    //   disabled: true,
    //   // visible: false,
    // })
    // // 修改字段组件属性
    // userNameField.setComponentProps({
    //   placeholder: '请输入用户名',
    // })

    // 也可以直接通过字段实例修改值和组件属性
    // userNameField.value = 111
    userNameField.componentProps = {
      placeholder: '请输入用户名111',
    }
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
