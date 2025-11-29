// import FormilyDemo from '@/components/01-formily-初体验'
// import FormilyDemo from '@/components/02_formily-form操作字段节点'
// import FormilyDemo2 from '@/components/03_formily-field操作字段节点'
// import FormilyDemo from '@/components/04_formily-effect联动'
// import FormilyDemo from '@/components/05_formily-schema联动'
// import FormilyDemo from '@/components/06_formily-onChange联动'
import FormilyDemo from '@/components/07_antd表单联动'

import { Card, Flex } from 'antd'

const App: React.FC = () => {
  return (
    <Flex vertical gap={16}>
      <Card>
        <FormilyDemo />
      </Card>
    </Flex>
  )
}

export default App
