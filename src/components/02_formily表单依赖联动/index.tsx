import React from 'react'
import {
  FormItem,
  Input,
  ArrayCards,
  FormButtonGroup,
  Submit,
} from '@formily/antd-v5'
import { createForm, onFieldChange, onFieldReact } from '@formily/core'
import {  createSchemaField } from '@formily/react'

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    ArrayCards,
  },
})

const form = createForm({
  effects(form) {
    // 主动联动模式
    onFieldChange('')
  },
})


const FormilyDependentDemo: React.FC = () => {
  return (

  )
}
export default FormilyDependentDemo