import SimpleDemo from '@/components/01-formily-初体验'
import FormilyDemo from '@/components/02_formily-form操作字段节点'
import FormilyDemo2 from '@/components/03_formily-field操作字段节点'
import FormilyDemo3 from '@/components/04_formily-effect联动'

import { Card, Flex } from 'antd'

const App: React.FC = () => {
  return (
    <Flex vertical gap={16}>
      <Card title="01-formily-初体验">
        <SimpleDemo />
      </Card>

      <Card title="02_formily-form获取和修改字段状态">
        <FormilyDemo />
      </Card>

      <Card title="03_formily-field获取和修改字段状态">
        <FormilyDemo2 />
      </Card>

      <Card title="04_formily-effect联动">
        <FormilyDemo3 />
      </Card>
    </Flex>
  )
}

export default App
