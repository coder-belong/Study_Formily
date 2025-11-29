import React from 'react'
import { Form, FormItem, Input, Select } from '@formily/antd-v5'
import { createForm, onFieldValueChange } from '@formily/core'
import { createSchemaField } from '@formily/react'
import { Button } from 'antd'

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    Select,
  },
})

const form = createForm({
  effects(form) {
    // tip：这里的 form 和外层的 form 是一个东西，可以同享 API
    // 主动联动模式(监听 name 为 goodStatus 表单项的改变)
    onFieldValueChange('goodStatus', (field) => {})
  },
})

const FormilyDependentDemo: React.FC = () => {
  console.log('组件重新渲染了')

  return (
    <>
      <Form form={form}>
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
          <SchemaField.String name="goodName" title="名称" x-decorator="FormItem" x-component="Input" />
        </SchemaField>
      </Form>

      <Button
        onClick={() => {
          // ---------- 获取其他表单项的状态 --------------
          // form.query('username').get('value')   // 获取值
          // form.query('username').get('loading') // 获取某个状态
          // form.query('username').get('errors')  // 获取错误

          // --------- 改表单字段的状态 ----------
          // form.query('age').set('visible', false) // 隐藏
          // form.query('age').set('required', true) // 必填
          // form.query('age').set('disabled', true) // 禁用

          // --------- 改表单字段的状态2 ----------
          // form.query('username').take((field) => {
          //   field.value = '张三'
          //   field.visible = true
          //   field.componentProps = { placeholder: '请输入用户名' }
          // })

          // 其他更改表单状态的方式（已不太推荐了）
          // form.setFieldState('goodStatus', (state) => {
          //   //对于初始联动，如果字段找不到，setFieldState会将更新推入更新队列，直到字段出现再执行操作
          //   // state.display = field.value
          // })

          console.log(form.query('goodStatus').value())
          console.log(form.query('goodStatus').get('value'))
        }}
      >
        查询表单字段信息
      </Button>
    </>
  )
}
export default FormilyDependentDemo
