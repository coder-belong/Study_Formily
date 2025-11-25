import SimpleDemo from '@/components/01-formily基本使用'
import FormilyDependentDemo from '@/components/02_formily表单依赖联动'

import { Card, Flex } from 'antd'

const App: React.FC = () => {
  return (
    <Flex vertical gap={16}>
      <Card title="Formily基本使用">
        <SimpleDemo />
      </Card>

      <Card title="Formily表单依赖联动">
        <FormilyDependentDemo />
      </Card>
    </Flex>
  )
}

export default App
